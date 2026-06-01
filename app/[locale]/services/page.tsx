import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesSection } from "@/components/sections/services-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return { title: t("servicesTitle") };
}

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
