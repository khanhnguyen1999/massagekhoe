import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutStorySection } from "@/components/sections/about-story-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return { title: t("aboutTitle") };
}

export default function AboutPage() {
  return (
    <>
      <AboutStorySection />
      <CtaBanner />
    </>
  );
}
