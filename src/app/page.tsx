import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <section className="wrap pt-20 pb-28 sm:pt-28 lg:pt-36">
      <h1 className="text-[clamp(2rem,6vw,3rem)] leading-[0.95] tracking-[-0.02em] lowercase">
        adham aly
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl lowercase">
        {siteConfig.tagline}
      </p>
    </section>
  );
}
