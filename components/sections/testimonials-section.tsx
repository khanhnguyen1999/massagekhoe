import { Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/motion/fade-in";

export async function TestimonialsSection() {
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Array<{ name: string; review: string }>;

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              key={item.name}
              delay={index * 0.08}
              className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-soft"
            >
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-7 text-primary/75">{item.review}</p>
              <p className="mt-5 font-semibold text-primary">{item.name}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
