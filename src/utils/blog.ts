import { getCollection, type CollectionEntry } from "astro:content";

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
