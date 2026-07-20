---
name: create-blog-post
description: Use this if the user wants to convert a blog post from Google Docs markdown to the format used in the Music Assistant website.
---

# Create Blog Post

Convert a draft markdown file into a properly formatted Music Assistant blog post.

## Usage

Place your draft blog post markdown file in the project root `create-blog-post/` directory (e.g., `/workspaces/music-assistant.io/create-blog-post/`), then run:

```shell
/create-blog-post
```

## What This Skill Does

Automates conversion of a draft markdown file with metadata into a production-ready Music Assistant blog post:

- Extracts metadata (blog title, author, publish date, tags, Social/OpenGraph fields)
- Removes "# Blog notes/preparations" section and lines with ☝️ emoji
- Converts `### **– Summary break / Read more –**` to `<!--more-->`
- Determines dynamic OG image text (title1/title2 headline split, category) in confirmation with you
- Processes hero image and any additional images
- Converts external links to HTML `<a>` tags with `target="_blank"`
- Formats content (removes bold from headings, fixes link references)
- Creates properly formatted blog post in `src/content/docs/blog/` with Astro/Starlight front matter

## Required Files in `create-blog-post/` Directory

1. **Draft markdown file** (any .md filename)
2. **`art.*`** - Hero/OG image (required, any common image format: `.webp`, `.png`, `.jpg`, `.jpeg`)
3. **`image2.*`, `image3.*`, etc.** - Additional images (optional, any common image format)

## Draft File Format

```markdown
# Metadata

**Blog title:** Your Blog Title

**Author:** Author Name

**Publish date:** DD-MM-YYYY

**Tags:** release, announcement

**Social/OpenGraph title** (Usually same as the blog title, visibility mostly limited to 50-60 characters)**:**
A short title.

**Social/OpenGraph description** (120-158 characters):
Influences SEO ranking. Include the main keyword, describe what readers will find, and give them a clear reason to click.

# Blog notes/preparations

☝️ Any lines with the pointer emoji can be removed during processing

# Blog content

![][image1]

Your intro paragraph here...

### **– Summary break / Read more –**

Rest of content...
```

**Notes:**

- The `![][image1]` reference should appear at the start of the "# Blog content" section. This will be replaced with the `art.webp` hero image.
- URL slug is optional and will be auto-generated from the blog title if not provided in metadata
- Lines beginning with ☝️ emoji are instructions and will be removed during processing
- The `### **– Summary break / Read more –**` marker will be converted to `<!--more-->`

## Output

Creates a production-ready blog post at:

- `src/content/docs/blog/YYYY/MM/DD/slug.md` - The formatted blog post
- `public/images/blog/YYYY/MM/DD/slug/art.webp` - OG/hero image (moved from `create-blog-post/`)
- `public/images/blog/YYYY/MM/DD/slug/image2.webp`, `image3.webp`, etc. - Additional images (converted to WebP)

## Conversion Process

### 1. Pre-process Draft

Before doing anything else, strip out embedded base64 image data from the draft file using a shell command. **Do not read the draft file before this step** — the base64 data can make the file extremely large.

Google Docs markdown exports include image references like `![][image1]` in the content body, with corresponding base64 definitions at the bottom of the file in the format:

```text
[image1]: <data:image/png;base64,iVBORw0KGgo... (potentially megabytes of data)>
```

Run this `sed` command via the Bash tool to strip them in-place:

```shell
sed -i '/^\[image[0-9]*\]: <data:/d' "create-blog-post/draft.md"
```

- This removes all lines matching the base64 image definition pattern
- The `![][image1]` references in the content body are preserved — they will be replaced with proper image paths later
- Only after this command completes should you read the draft file

### 2. Parse Metadata

- Extract blog title, author, publish date, tags (convert to YAML list), Social/OpenGraph title and description
- Auto-generate URL slug from blog title (lowercase, hyphens for spaces, remove special characters)
- Remove "# Blog notes/preparations" section and all content under it (up to "# Blog content")
- Remove all lines that start with ☝️ emoji (instruction lines)
- Convert `### **– Summary break / Read more –**` marker to `<!--more-->`

### 3. Determine Dynamic OG Image Text

The blog's OG image is rendered dynamically from meta tags rather than being flat art baked into `art.webp`, so it needs its own short headline and category text:

- **`og:image:alt`** — accessibility text for the OG image; use the Social/OpenGraph title or blog title
- **`og:image:title1`** — rendered in a **light** font weight, typically a short lead-in phrase (e.g. "What's new in")
- **`og:image:title2`** — rendered in a **bold** font weight, typically the main headline (e.g. "Music Assistant 2.9")
- Either line can be used alone, or both together — pick whichever combination best fits the desired look for this post
- **`og:image:category`** — a short display label for the image (e.g. "Announcements", "Release", "Community"). This is distinct from the YAML `tags` list used for the post itself
- **`og:image:author`** — reuse the `Author` value already captured from the draft metadata; no extra confirmation needed

Propose a title1/title2 split and a category label based on the blog title, Social/OpenGraph title, and content — then confirm both with the user before writing them into the front matter. These are freeform, creative text rather than values that can be mechanically derived, so do not guess silently.

The `og:image` and `twitter:image` meta tags do not point at `art.webp` directly — they point at the Open Home Foundation OG image generator, which fetches the post's own URL and renders an image from its `og:image:*` meta tags:

```text
https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/YYYY/MM/DD/slug
```

Build that URL from the post's own date/slug (same `YYYY/MM/DD/slug` used for the content and image paths). `art.webp` is still required — it's used for the inline hero image and the `cover` field — but it is no longer the value of `og:image`/`twitter:image`.

### 4. Process Images

Before processing images, ensure the `cwebp` tool is installed. If not, install it:

```shell
# Check if cwebp is available, install if missing
which cwebp || sudo apt-get install -y webp
```

**Hero image (`art.*`):**

- Find the `art` image in `create-blog-post/` (any extension: `.webp`, `.png`, `.jpg`, `.jpeg`)
- If the source is already `.webp`, copy it to `public/images/blog/YYYY/MM/DD/slug/art.webp`
- If the source is any other format, convert to WebP: `cwebp -resize 1200 630 -q 85 input -o public/images/blog/YYYY/MM/DD/slug/art.webp`
- The OG image must be exactly 1200x630 pixels — the source image should already be this size, so use `-resize 1200 630` to ensure correctness
- Replace `![][image1]` reference in "# Blog content" section with: `<img src="/images/blog/YYYY/MM/DD/slug/art.webp" alt="Blog Title">`
- CRITICAL: Use double quotes for all HTML attributes (prevents breaking on apostrophes in alt text)
- Do NOT add inline styles (no `style` attribute) on image tags
- Alt text uses the Social/OpenGraph title or blog title
- No wrapper tags (no `<p>` tag)

**Additional images (if any):**

- Find `image2.*`, `image3.*`, etc. in `create-blog-post/` (any extension: `.webp`, `.png`, `.jpg`, `.jpeg`)
- Convert to WebP with a max width of 800px: `cwebp -resize 800 0 -q 85 input -o output.webp` (the `0` for height preserves the aspect ratio)
- If the source is already `.webp`, still re-encode it with the resize: `cwebp -resize 800 0 -q 85 input.webp -o output.webp`
- Output to `public/images/blog/YYYY/MM/DD/slug/image2.webp`, `image3.webp`, etc.
- Update references in content

### 5. Transform Links

**External links** (different domains/subdomains):

- Convert to: `<a href="URL" target="_blank" rel="noopener">text</a>`

**Internal links** (`www.music-assistant.io` and `music-assistant.io` only):

- Convert to relative path Markdown links: `[text](/path)` (strip the domain, always use relative paths)

### 6. Clean Content

- **Headings**: Remove bold formatting (`## **Title**` → `## Title`)
- **Heading levels**: If content starts with H1 (`#`), demote all headings one level (content should start at H2)
- **Subheadings**: Convert H3 (`###`) subheadings that appear directly under H2 section headings to **bold text** instead (e.g., `### Subtitle` → `**Subtitle**`)
- **Backticks**: Strip erroneous `\`` characters (preserve code blocks/inline code)
- **Text content**: Do not change the author's wording, phrasing, or writing style. The blog text should stay as-is. If you spot obvious typos or locale spelling issues (such as British English instead of American English), do not fix them silently — collect them and ask the user for confirmation before applying any changes.
- **Emojis**: Preserve all emojis that appear in the blog content. Do not strip them out.

### 7. Build Blog Post

- Create `src/content/docs/blog/YYYY/MM/DD/slug.md`
- Astro/Starlight front matter with:
  - `head` (OG image meta tags: `og:image`/`twitter:image` pointing at the OG image generator URL, plus the title1/title2/category/author values from step 3)
  - `title`
  - `description`
  - `cover` (image path and alt)
  - `excerpt`
  - `date` (ISO 8601 format: `YYYY-MM-DDT00:00:00.000Z`)
  - `authors` (YAML list — must match a key in `src/authors.mjs`)
  - `tags` (YAML list)
- Hero image (no wrapper)
- Intro paragraph
- `<!--more-->` tag after first paragraph
- Remaining content

### Front Matter Example

```yaml
---
head:
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/YYYY/MM/DD/slug"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://assets.openhomefoundation.org/opengraph?url=https://www.music-assistant.io/blog/YYYY/MM/DD/slug"
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Social/OpenGraph title"
  - tag: meta
    attrs:
      property: "og:image:title1"
      content: "Light-weight lead-in line (optional)"
  - tag: meta
    attrs:
      property: "og:image:title2"
      content: "Bold headline"
  - tag: meta
    attrs:
      property: "og:image:author"
      content: "Author Name"
  - tag: meta
    attrs:
      property: "og:image:category"
      content: "Category Label"

title: "Blog Title"
description: "Social/OpenGraph description"
cover:
  image: /public/images/blog/YYYY/MM/DD/slug/art.webp
  alt: "Social/OpenGraph title"
excerpt: "First paragraph of blog content"
date: YYYY-MM-DDT00:00:00.000Z
authors:
  - authorname
tags:
  - release
  - announcement
---
```

## Example

1. Place in project root `create-blog-post/`:
   - `draft-release-update.md` - Your draft file
   - `art.webp` - OG/hero image (or `art.png`, `art.jpg`, etc.)
   - `image2.png`, `image3.png` - Additional images (any common image format)
2. Run `/create-blog-post`

This would create:

- `src/content/docs/blog/2026/01/13/release-update.md`
- `public/images/blog/2026/01/13/release-update/art.webp`
- `public/images/blog/2026/01/13/release-update/image2.webp`, `image3.webp` (if additional images exist)

## Important Notes

**Image references:**

- Draft: `![][image1]` (at start of "# Blog content" section) → Output: `art.webp` hero image (1200x630, OG image)
- Draft: `![][image2]` → Look for `image2.*` (any format), convert to `image2.webp` (max 800px wide)
- Draft: `![][image3]` → Look for `image3.*` (any format), convert to `image3.webp` (max 800px wide)
- Source images can be any common format (`.webp`, `.png`, `.jpg`, `.jpeg`) — all are converted/re-encoded to `.webp`

**Requirements:**

- Hero image reference should appear at the start of the "# Blog content" section
- `cwebp` tool is required — the skill will auto-install it via `sudo apt-get install -y webp` if not already present

**Content processing:**

- Remove "# Blog notes/preparations" section entirely
- Remove all lines starting with ☝️ emoji (instruction lines)
- Convert `### **– Summary break / Read more –**` to `<!--more-->`

**Output format:**

- Filename: `slug.md`
- Blog post path: `src/content/docs/blog/YYYY/MM/DD/slug.md`
- Image directory: `public/images/blog/YYYY/MM/DD/slug/`
- Tags in YAML list format (even single tag)

**Link handling:**

- `www.music-assistant.io` and `music-assistant.io` links must be converted to relative paths (e.g., `https://www.music-assistant.io/foo` → `/foo`)
- All other domains/subdomains → HTML `<a>` tags with `target="_blank" rel="noopener"`

## Post-processing summary

After the blog post has been created, output a summary to the user covering:

**Metadata:**

- Title, author (and whether they were verified in `src/authors.mjs`), date, tags
- OG image title1/title2 split and category label, and confirmation that these were reviewed with the user

**Images:**

- Each source image, its original dimensions/format, and where it was output (with the conversion applied)

**Content transformations:**

- A bulleted list of every notable transformation applied, such as:
  - Sections/content removed (base64 data, blog template, notes, instruction lines)
  - Image references replaced
  - Summary break conversion
  - Link conversions (external to HTML, internal to relative markdown)
  - Quote/blockquote formatting
  - Heading changes (reformatted, promoted/demoted, bold removed, H3 → bold subheadings)
  - Escape character cleanup

**Proposed text changes (requires user approval):**

- If any typos or locale spelling issues were spotted (such as British to American English), list each one and ask the user whether to apply them. Do not apply these changes until the user confirms.
