import type { Metadata } from "next";
import Script from "next/script";
import { getLocale, getTranslations } from "next-intl/server";
import { ServicesSection } from "@/components/sections/services-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { siteConfig, type SupportedLocale } from "@/lib/data";
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
    pathname: "/services",
    title: t("servicesTitle"),
    description: t("servicesDescription")
  });
}

export default async function ServicesPage() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return (
    <>
      <Script
        id="services-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildWebPageSchema({
              locale,
              pathname: "/services",
              title: t("servicesTitle"),
              description: t("servicesDescription")
            }),
            {
              "@context": "https://schema.org",
              "@type": "OfferCatalog",
              name: `${siteConfig.name} Services`,
              url: locale === "en" ? `${siteConfig.url}/en/services` : `${siteConfig.url}/services`
            }
          ])
        }}
      />
      <ServicesSection />
      <CtaBanner />
    </>
  );
}
