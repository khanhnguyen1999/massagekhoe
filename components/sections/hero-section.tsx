import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/data";

export async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className="overflow-hidden section-padding">
      <div className="container grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <FadeIn className="space-y-6 md:space-y-8">
          <span className="inline-flex rounded-full border border-accent/30 bg-secondary px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 md:px-4 md:text-xs md:tracking-[0.24em]">
            {t("badge")}
          </span>
          <div className="space-y-4 md:space-y-5">
            <h1 className="max-w-3xl font-heading text-[2.35rem] font-semibold leading-[1.05] text-primary sm:text-5xl md:text-6xl">
              {t("headline")}
            </h1>
            <p className="max-w-2xl text-[15px] leading-7 text-primary/75 md:text-lg md:leading-8">
              {t("subheadline")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.directCallHref} className="block sm:inline-block">
              <Button size="lg" className="w-full sm:w-auto">
                {t("book")}
              </Button>
            </a>
            <Link href="/services" className="block sm:inline-block">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("services")}
              </Button>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent/10 to-transparent blur-2xl md:-inset-4" />
          <div className="gold-ring glass-panel relative overflow-hidden rounded-[1.5rem] p-2.5 md:rounded-[2rem] md:p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury Vietnamese wellness massage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
