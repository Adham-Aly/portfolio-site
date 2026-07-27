import { siteConfig } from "@/lib/site";

/** Dimensions of the generated card in src/app/opengraph-image.tsx. */
export const ogImageSize = { width: 1200, height: 630 };

export const ogImageAlt = `${siteConfig.name} — ${siteConfig.tagline}`;

// Points at the generated card's route. Resolved against `metadataBase`.
const ogImage = {
  url: "/opengraph-image",
  ...ogImageSize,
  alt: ogImageAlt,
  type: "image/png",
};

/**
 * Next.js merges metadata *shallowly*: a page that declares `openGraph` or
 * `twitter` replaces the root layout's copy wholesale rather than merging into
 * it — which silently drops the card image along with og:site_name and
 * og:locale. Pages spread these fragments back in so overriding the title or
 * URL can't cost them the rest.
 */
// Not `as const`: a readonly tuple won't assign to Next's mutable OGImage[].
export const baseOpenGraph = {
  siteName: siteConfig.name,
  locale: siteConfig.locale,
  images: [ogImage],
};

export const baseTwitter = {
  card: "summary_large_image" as const,
  images: [ogImage],
};
