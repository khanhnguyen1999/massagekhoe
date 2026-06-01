import { Check } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getServicePackages } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export async function ServicesSection() {
  const t = await getTranslations("servicesPage");
  const locale = (await getLocale()) as "vi" | "en";
  const servicePackages = getServicePackages(locale);

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h1 className="section-title">{t("title")}</h1>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>

        <div className="grid gap-6 xl:grid-cols-3">
          {servicePackages.map((service, index) => (
            <FadeIn
              key={service.key}
              delay={index * 0.08}
              className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">
                {t("package")} {index + 1}
              </p>
              <div className="mt-4">
                <h2 className="font-heading text-4xl text-primary">{service.duration}</h2>
                <p className="mt-2 text-lg font-semibold text-primary">{service.price}</p>
                <p className="mt-2 text-sm text-primary/55">{service.subtitle}</p>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary/50">
                {t("includes")}
              </p>
              <ul className="mt-4 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-primary/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-accent/20 bg-secondary p-6 text-primary shadow-soft">
          <p className="font-heading text-2xl">{t("additional")}</p>
          <p className="mt-2 text-base">
            {t("compress")}: <span className="font-semibold">400,000 VND</span> {t("each")}
          </p>
          <p className="mt-2 text-sm text-primary/70">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
