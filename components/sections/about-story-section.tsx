import { getTranslations } from "next-intl/server";
import { timeline } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export async function AboutStorySection() {
  const t = await getTranslations("about");

  return (
    <section className="section-padding">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="space-y-5">
          <h1 className="section-title">{t("title")}</h1>
          <p className="text-base leading-8 text-primary/75">{t("lead")}</p>
          <p className="text-sm leading-7 text-primary/70">{t("body1")}</p>
          <p className="text-sm leading-7 text-primary/70">{t("body2")}</p>
        </FadeIn>
        <FadeIn className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-soft">
          <h2 className="font-heading text-3xl text-primary">{t("timelineTitle")}</h2>
          <div className="mt-8 space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-5">
                <div className="flex w-20 shrink-0 items-start justify-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                  {item.year}
                </div>
                <p className="pt-2 text-sm leading-7 text-primary/70">{t(item.key)}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
