import { getCollection, type CollectionEntry } from "astro:content";
import { authors } from "../authors.mjs";

export type BlogPost = CollectionEntry<"docs"> & { data: { date: Date } };

export async function getPosts() {
  return (await getCollection("docs"))
    .filter(
      (entry): entry is BlogPost =>
        entry.id.startsWith("blog/") &&
        !entry.data.draft &&
        entry.data.date instanceof Date,
    )
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function coverImage(post: CollectionEntry<"docs">) {
  const cover = post.data.cover;
  if (!cover) return undefined;
  const image = "image" in cover ? cover.image : cover.dark;
  return { src: typeof image === "string" ? image : image.src, alt: cover.alt };
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/*
 * Listing pages: /blog/ and its filtered views, each paginated.
 *
 *   /blog/                           newest posts, latest one featured
 *   /blog/page/<n>/                  older posts
 *   /blog/tags/<tag>/[page/<n>/]     posts with a tag
 *   /blog/authors/<author>/[...]     posts by an author
 *   /blog/<year>/[page/<n>/]         posts published in a year
 *
 * Tag and author URLs match the ones starlight-blog generated, so existing
 * links keep working. Every filter is a plain link to its own page, so filtered
 * views can be shared and crawled and work without JavaScript. Page 1 never
 * gets a /page/1/ URL.
 */

/** First page of /blog/: the featured post plus twelve cards (fills both the two- and three-column grid). */
export const FIRST_PAGE_SIZE = 13;
/** Every other listing page: four rows of three cards. */
export const PAGE_SIZE = 12;

export type ListingKind = "all" | "tag" | "author" | "year";

export interface Facet {
  kind: ListingKind;
  /** URL slug of the facet value; empty for "all". */
  slug: string;
  label: string;
  count: number;
  /** Base URL of the listing, with a trailing slash. */
  href: string;
  picture?: string;
}

export interface BlogFacets {
  all: Facet;
  tags: Facet[];
  authors: Facet[];
  years: Facet[];
}

export interface ListingPage {
  facet: Facet;
  /** 1-based page number. */
  page: number;
  totalPages: number;
  posts: BlogPost[];
  /** First page of the unfiltered blog, where the newest post gets the featured card. */
  featured: boolean;
  prevHref?: string;
  nextHref?: string;
}

/** The same slugs github-slugger (and so starlight-blog) produces for plain names and tags. */
export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/\s/g, "-");
}

/** Tags are written in lower case in frontmatter; show them capitalised. */
export function tagLabel(tag: string) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

type AuthorConfig = { name: string; picture?: string };

export function postAuthors(post: CollectionEntry<"docs">) {
  const raw = post.data.authors;
  const list = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];
  return list.map((author) => {
    const data: AuthorConfig | undefined =
      typeof author === "string"
        ? (authors as Record<string, AuthorConfig>)[author]
        : author;
    if (!data)
      throw new Error(
        `Blog author '${String(author)}' in '${post.id}' is not in src/authors.mjs.`,
      );
    return { name: data.name, slug: slugify(data.name), picture: data.picture };
  });
}

function countFacets(
  posts: BlogPost[],
  kind: Exclude<ListingKind, "all">,
  values: (post: BlogPost) => Omit<Facet, "kind" | "count" | "href">[],
  href: (slug: string) => string,
) {
  const facets = new Map<string, Facet>();
  for (const post of posts) {
    for (const value of values(post)) {
      const existing = facets.get(value.slug);
      if (existing) existing.count++;
      else
        facets.set(value.slug, {
          ...value,
          kind,
          count: 1,
          href: href(value.slug),
        });
    }
  }
  return [...facets.values()];
}

const byCountThenLabel = (a: Facet, b: Facet) =>
  b.count - a.count || a.label.localeCompare(b.label);

/** Every tag, author and year with its post count, for the filter bar and drawer. */
export function getFacets(posts: BlogPost[]): BlogFacets {
  return {
    all: {
      kind: "all",
      slug: "",
      label: "All posts",
      count: posts.length,
      href: "/blog/",
    },
    tags: countFacets(
      posts,
      "tag",
      (post) =>
        (post.data.tags ?? []).map((tag) => ({
          slug: slugify(tag),
          label: tagLabel(tag),
        })),
      (slug) => `/blog/tags/${slug}/`,
    ).sort(byCountThenLabel),
    authors: countFacets(
      posts,
      "author",
      (post) =>
        postAuthors(post).map(({ name, slug, picture }) => ({
          slug,
          label: name,
          picture,
        })),
      (slug) => `/blog/authors/${slug}/`,
    ).sort(byCountThenLabel),
    years: countFacets(
      posts,
      "year",
      (post) => {
        const year = String(post.data.date.getUTCFullYear());
        return [{ slug: year, label: year }];
      },
      (slug) => `/blog/${slug}/`,
    ).sort((a, b) => Number(b.slug) - Number(a.slug)),
  };
}

export function pageHref(facet: Facet, page: number) {
  return page === 1 ? facet.href : `${facet.href}page/${page}/`;
}

function paginate(
  facet: Facet,
  posts: BlogPost[],
  withFeatured: boolean,
): ListingPage[] {
  const firstSize = withFeatured ? FIRST_PAGE_SIZE : PAGE_SIZE;
  const totalPages =
    1 + Math.ceil(Math.max(0, posts.length - firstSize) / PAGE_SIZE);

  return Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    const start = page === 1 ? 0 : firstSize + (page - 2) * PAGE_SIZE;
    const end = page === 1 ? firstSize : start + PAGE_SIZE;
    return {
      facet,
      page,
      totalPages,
      posts: posts.slice(start, end),
      featured: withFeatured && page === 1,
      prevHref: page > 1 ? pageHref(facet, page - 1) : undefined,
      nextHref: page < totalPages ? pageHref(facet, page + 1) : undefined,
    };
  });
}

/** Every listing page of one kind, with the facets for its filter bar. */
export async function getListings(kind: ListingKind) {
  const posts = await getPosts();
  const facets = getFacets(posts);

  const listings =
    kind === "all"
      ? paginate(facets.all, posts, true)
      : kind === "tag"
        ? facets.tags.flatMap((facet) =>
            paginate(
              facet,
              posts.filter((post) =>
                (post.data.tags ?? []).some((tag) => slugify(tag) === facet.slug),
              ),
              false,
            ),
          )
        : kind === "author"
          ? facets.authors.flatMap((facet) =>
              paginate(
                facet,
                posts.filter((post) =>
                  postAuthors(post).some((author) => author.slug === facet.slug),
                ),
                false,
              ),
            )
          : facets.years.flatMap((facet) =>
              paginate(
                facet,
                posts.filter(
                  (post) => String(post.data.date.getUTCFullYear()) === facet.slug,
                ),
                false,
              ),
            );

  return listings.map((listing) => ({ listing, facets }));
}

/** The `[...page]` route param for a listing: undefined on page 1, `page/<n>` after. */
export function pageParam(page: number) {
  return page === 1 ? undefined : `page/${page}`;
}

/** Page numbers for the pagination bar, `null` for a gap. Keeps first, last and the current page's neighbours. */
export function getPageNumbers(current: number, total: number) {
  const pages = [
    ...new Set([1, total, current - 1, current, current + 1]),
  ]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);
  const result: (number | null)[] = [];
  pages.forEach((page, index) => {
    const previous = pages[index - 1];
    if (previous !== undefined && page - previous === 2) result.push(previous + 1);
    else if (previous !== undefined && page - previous > 2) result.push(null);
    result.push(page);
  });
  return result;
}
