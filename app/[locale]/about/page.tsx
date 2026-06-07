import type { Metadata } from "next";
import Script from "next/script";
import { getLocale, getTranslations } from "next-intl/server";
import { AboutStorySection } from "@/components/sections/about-story-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { SupportedLocale } from "@/lib/data";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return buildPageMetadata({
    locale: locale as SupportedLocale,
    pathname: "/about",
    title: t("aboutTitle"),
    description: t("aboutDescription")
  });
}

export default async function AboutPage() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return (
    <>
      <Script
        id="about-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildWebPageSchema({
              locale,
              pathname: "/about",
              title: t("aboutTitle"),
              description: t("aboutDescription")
            })
          )
        }}
      />
      <AboutStorySection />
      <CtaBanner />
    </>
  );
}
