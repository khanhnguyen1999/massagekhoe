import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { gallery } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export async function GallerySection() {
  const t = await getTranslations("gallery");

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {gallery.map((item, index) => (
            <FadeIn
              key={item.key}
              delay={index * 0.06}
              className={index === 0 || index === 4 ? "xl:col-span-6" : "xl:col-span-3"}
            >
              <div className="group relative overflow-hidden rounded-[1.75rem]">
                <div className="relative h-72 md:h-80">
                  <Image
                    src={item.image}
                    alt={t(item.key)}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-heading text-2xl text-secondary">{t(item.key)}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
