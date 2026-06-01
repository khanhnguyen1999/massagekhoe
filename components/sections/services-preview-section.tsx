import { Check } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getServicePackages } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";
import { ServicesPreviewMobileCarousel } from "@/components/sections/services-preview-mobile-carousel";

export async function ServicesPreviewSection() {
  const t = await getTranslations();
  const locale = (await getLocale()) as "vi" | "en";
  const servicePackages = getServicePackages(locale);

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h2 className="section-title">{t("servicesPreview.title")}</h2>
          <p className="section-copy">{t("servicesPreview.copy")}</p>
        </FadeIn>

        <ServicesPreviewMobileCarousel
          services={servicePackages}
          packageLabel={t("servicesPage.package")}
          includesLabel={t("servicesPage.includes")}
        />

        <div className="hidden gap-4 md:grid md:gap-6 xl:grid-cols-3">
          {servicePackages.map((service, index) => (
            <FadeIn
              key={service.key}
              delay={index * 0.08}
              className="glass-panel rounded-[1.5rem] border border-primary/10 p-5 shadow-soft md:rounded-[2rem] md:p-7"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-accent md:text-sm md:tracking-[0.3em]">
                {t("servicesPage.package")} {index + 1}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <h3 className="font-heading text-2xl text-primary md:text-3xl">
                  {service.duration}
                </h3>
                <p className="text-base font-semibold text-primary md:text-lg">{service.price}</p>
              </div>
              <p className="mt-2 text-sm text-primary/55">{service.subtitle}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/50 md:mt-6 md:text-sm md:tracking-[0.2em]">
                {t("servicesPage.includes")}
              </p>
              <ul className="mt-4 space-y-2.5 md:space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-primary/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-accent/20 bg-secondary p-5 text-primary shadow-soft md:mt-8 md:rounded-[2rem] md:p-6">
          <p className="font-heading text-xl md:text-2xl">{t("servicesPage.additional")}</p>
          <p className="mt-2 text-sm leading-6 md:text-base">
            {t("servicesPage.compress")}: <span className="font-semibold">400,000 VND</span>{" "}
            {t("servicesPage.each")}
          </p>
          <p className="mt-2 text-sm text-primary/70">{t("servicesPage.note")}</p>
        </div>
      </div>
    </section>
  );
}
