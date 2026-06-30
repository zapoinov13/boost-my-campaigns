/** Canonical production URL — used for OG tags, CAPI event_source_url hints, etc. */
export const SITE_URL = "https://boost-campaigns.vercel.app";

/** Stable OG image (served from /public, not content-hashed). */
export const OG_IMAGE_URL = `${SITE_URL}/og-preview.jpg`;

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
