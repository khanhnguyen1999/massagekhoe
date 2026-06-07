import { Phone, MapPinned } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { branches, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export async function ContactSection() {
  const t = await getTranslations("contact");

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>
        <div className="grid gap-8">
          {branches.map((branch, index) => (
            <FadeIn
              key={branch.address}
              delay={index * 0.08}
              className="grid overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="p-5 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-accent md:text-sm md:tracking-[0.3em]">
                  Branch {index + 1}
                </p>
                <h2 className="mt-3 font-heading text-2xl text-primary md:text-3xl">
                  {branch.name}
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-primary/75">
                  <p className="flex gap-3">
                    <MapPinned className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{siteConfig.directCallDisplay}</span>
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={siteConfig.directCallHref} className="sm:flex-1">
                    <Button className="w-full">{t("call")}</Button>
                  </a>
                  <a
                    href={branch.directions}
                    target="_blank"
                    rel="noreferrer"
                    className="sm:flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      {t("directions")}
                    </Button>
                  </a>
                </div>
              </div>
              <iframe
                src={branch.mapEmbed}
                loading="lazy"
                className="min-h-[260px] w-full border-0 md:min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
                title={branch.address}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
