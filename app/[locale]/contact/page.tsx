import type { Metadata } from "next";
import Script from "next/script";
import { getLocale, getTranslations } from "next-intl/server";
import { ContactSection } from "@/components/sections/contact-section";
import type { SupportedLocale } from "@/lib/data";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return buildPageMetadata({
    locale,
    pathname: "/contact",
    title: t("contactTitle"),
    description: t("contactDescription")
  });
}

export default async function ContactPage() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return (
    <>
      <Script
        id="contact-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildWebPageSchema({
              locale,
              pathname: "/contact",
              title: t("contactTitle"),
              description: t("contactDescription")
            })
          )
        }}
      />
      <ContactSection />
    </>
  );
}
