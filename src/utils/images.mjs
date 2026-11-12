// Resized images from Netlify's image CDN (/.netlify/images), so a page
// doesn't send a large image for the browser to shrink. The CDN resizes
// when the image is first asked for, so nothing is fetched at build time.
// It only runs on Netlify: use these URLs in production builds only.
//
// Adapted from home-assistant.io (astro/src/lib/images.mjs).
//
// The CDN resizes images from this site, and from the hosts below, which
// netlify.toml allows under [images] remote_images. Keep the two lists in
// step: images.test.mjs checks that every host here is allowed there. An
// image from any other host is used as it is.
export const REMOTE_IMAGE_HOSTS = [
  // Open Graph images: blog post covers, and `image: auto` links.
  "assets.openhomefoundation.org",
  // Open Home Foundation blog images, used by crossposted posts.
  "www.openhomefoundation.org",
  // YouTube video thumbnails.
  "i.ytimg.com",
  // The merch store.
  "store.openhomefoundation.org",
];

// The image at `width` pixels wide, or null when the CDN can't resize it.
// The CDN picks the format (AVIF or WebP) from what the browser accepts.
export function resized(image, width) {
  if (!image) return null;
  if (!/^\/(?!\/)/.test(image)) {
    let url;
    try {
      url = new URL(image);
    } catch {
      return null;
    }
    if (url.protocol !== "https:" || !REMOTE_IMAGE_HOSTS.includes(url.hostname)) return null;
  }
  return `/.netlify/images?url=${encodeURIComponent(image)}&w=${width}`;
}

// A srcset of the image at each width, or undefined when the CDN can't
// resize it, so the <img> keeps its original src.
export function srcset(image, widths) {
  const urls = widths.map((width) => resized(image, width));
  if (urls.some((url) => url === null)) return undefined;
  return urls.map((url, index) => `${url} ${widths[index]}w`).join(", ");
}
