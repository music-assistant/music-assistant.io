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
- Processes hero image and any additional images
- Converts external links to HTML `<a>` tags with `target="_blank"`
- Formats content (removes bold from headings, fixes link references)
- Creates properly formatted blog post in `src/content/docs/blog/` with Astro/Starlight front matter

## Required Files in `create-blog-post/` Directory

1. **Draft markdown file** (any .md filename)
2. **`art.webp`** - Hero/OG image (required)
3. **`image2.png`, `image3.png`, etc.** - Additional images (optional, will be converted to WebP)

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
- `public/images/blog/YYYY/MM/DD/slug/image2.webp`, `image3.webp`, etc. - Additional images (converted from PNGs)

## Conversion Process

### 1. Parse Metadata

- Extract blog title, author, publish date, tags (convert to YAML list), Social/OpenGraph title and description
- Auto-generate URL slug from blog title (lowercase, hyphens for spaces, remove special characters)
- Remove "# Blog notes/preparations" section and all content under it (up to "# Blog content")
- Remove all lines that start with ☝️ emoji (instruction lines)
- Convert `### **– Summary break / Read more –**` marker to `<!--more-->`

### 2. Process Images

**Hero image (`art.webp`):**

- Move to `public/images/blog/YYYY/MM/DD/slug/art.webp`
- Replace `![][image1]` reference in "# Blog content" section with: `<img src="/images/blog/YYYY/MM/DD/slug/art.webp" alt="Blog Title">`
- CRITICAL: Use double quotes for all HTML attributes (prevents breaking on apostrophes in alt text)
- Do NOT add inline styles (no `style` attribute) on image tags
- Alt text uses the Social/OpenGraph title or blog title
- No wrapper tags (no `<p>` tag)

**Additional images (if any):**

- Find `image2.png`, `image3.png`, etc. in `create-blog-post/` directory
- Convert to WebP: `cwebp -resize 900 0 -q 85 input.png -o output.webp`
- Move to `public/images/blog/YYYY/MM/DD/slug/`
- Update references in content

### 3. Transform Links

**External links** (different domains/subdomains):

- Convert to: `<a href="URL" target="_blank" rel="noopener">text</a>`

**Internal links** (`www.music-assistant.io` and `music-assistant.io` only):

- Convert to relative path Markdown links: `[text](/path)` (strip the domain, always use relative paths)

### 4. Clean Content

- **Headings**: Remove bold formatting (`## **Title**` → `## Title`)
- **Heading levels**: If content starts with H1 (`#`), demote all headings one level (content should start at H2)
- **Subheadings**: Convert H3 (`###`) subheadings that appear directly under H2 section headings to **bold text** instead (e.g., `### Subtitle` → `**Subtitle**`)
- **Backticks**: Strip erroneous `\`` characters (preserve code blocks/inline code)

### 5. Build Blog Post

- Create `src/content/docs/blog/YYYY/MM/DD/slug.md`
- Astro/Starlight front matter with:
  - `head` (OG image meta tags)
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
      property: og:image
      content: /images/blog/YYYY/MM/DD/slug/art.webp
  - tag: meta
    attrs:
      property: og:image:alt
      content: "Social/OpenGraph title"

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
   - `art.webp` - OG/hero image
   - `image2.png`, `image3.png` - Additional images (if any)
2. Run `/create-blog-post`

This would create:

- `src/content/docs/blog/2026/01/13/release-update.md`
- `public/images/blog/2026/01/13/release-update/art.webp`
- `public/images/blog/2026/01/13/release-update/image2.webp`, `image3.webp` (if additional images exist)

## Important Notes

**Image references:**

- Draft: `![][image1]` (at start of "# Blog content" section) → Output: `art.webp` hero image
- Draft: `![][image2]` → Look for `image2.png`, convert to `image2.webp`
- Draft: `![][image3]` → Look for `image3.png`, convert to `image3.webp`

**Requirements:**

- Hero image reference should appear at the start of the "# Blog content" section
- `cwebp` tool required for PNG→WebP conversion (install: `sudo apt-get install -y webp`)

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
