import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { StoreGallerySection } from "@/components/sections/store-gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return { title: t("homeTitle") };
}

export default function HomePage() {
  return (
    <>
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
