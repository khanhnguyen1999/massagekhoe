import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { storeGallery } from "@/lib/data";
import { FadeIn } from "@/components/motion/fade-in";

export async function StoreGallerySection() {
  const t = await getTranslations("store");
  const locale = (await getLocale()) as "vi" | "en";

  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-10 space-y-3">
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-copy">{t("copy")}</p>
        </FadeIn>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
              <Image
                src={storeGallery[0].image}
                alt={storeGallery[0].title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 p-5 md:p-7">
              <p className="font-heading text-2xl text-secondary md:text-3xl">
                {storeGallery[0].title[locale]}
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:gap-5">
            {storeGallery.slice(1).map((item, index) => (
              <FadeIn
                key={item.image}
                delay={index * 0.08}
                className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
              >
                <div className="relative h-[180px] sm:h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <div className="absolute bottom-0 p-5 md:p-6">
                  <p className="font-heading text-xl text-secondary md:text-2xl">
                    {item.title[locale]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
