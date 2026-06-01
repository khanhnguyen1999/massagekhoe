import { getTranslations } from "next-intl/server";
import { features } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export async function WhyChooseSection() {
  const t = await getTranslations("why");

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, key }, index) => (
            <FadeIn
              key={key}
              delay={index * 0.08}
              className="glass-panel rounded-[1.75rem] border border-primary/10 p-6 shadow-soft"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl text-primary">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-primary/70">
                {t(`${key}.copy`)}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
