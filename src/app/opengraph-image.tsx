import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogImageAlt, ogImageSize } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

// Shared with the metadata in src/lib/seo.ts so the card's real dimensions and
// the og:image tags describing it cannot disagree.
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = "image/png";

// The palette is duplicated from globals.css because satori resolves styles at
// build time and never sees the stylesheet's custom properties.
const background = "#f4f1e9";
const foreground = "#1c1b18";
const muted = "#6f6b61";

export default async function Image() {
  // process.cwd() is the project root. Read at build time, since this route is
  // prerendered to a static PNG.
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/LibreBaskerville-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/LibreBaskerville-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background,
          color: foreground,
          fontFamily: "Libre Baskerville",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.name}
          </div>

          <div
            style={{
              width: 96,
              height: 2,
              marginTop: 30,
              marginBottom: 34,
              background: foreground,
              opacity: 0.25,
            }}
          />

          <div style={{ fontSize: 33, lineHeight: 1.55, color: muted }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: muted }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: regular,
          style: "normal",
          weight: 400,
        },
        { name: "Libre Baskerville", data: bold, style: "normal", weight: 700 },
      ],
    },
  );
}
