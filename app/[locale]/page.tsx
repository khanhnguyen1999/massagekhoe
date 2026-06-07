import type { Metadata } from "next";
import Script from "next/script";
import { getLocale, getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { StoreGallerySection } from "@/components/sections/store-gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { SupportedLocale } from "@/lib/data";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return buildPageMetadata({
    locale,
    pathname: "",
    title: t("homeTitle"),
    description: t("homeDescription")
  });
}

export default async function HomePage() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return (
    <>
      <Script
        id="home-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildWebPageSchema({
              locale,
              pathname: "",
              title: t("homeTitle"),
              description: t("homeDescription")
            })
          )
        }}
      />
      <HeroSection />
      <WhyChooseSection />
      <ServicesPreviewSection />
      <StoreGallerySection />
      <GallerySection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
