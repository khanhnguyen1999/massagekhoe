import type { Metadata } from "next";
import Script from "next/script";
import { getLocale, getTranslations } from "next-intl/server";
import { BookingSection } from "@/components/sections/booking-section";
import type { SupportedLocale } from "@/lib/data";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return buildPageMetadata({
    locale,
    pathname: "/booking",
    title: t("bookingTitle"),
    description: t("bookingDescription")
  });
}

export default async function BookingPage() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("seo");
  return (
    <>
      <Script
        id="booking-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildWebPageSchema({
              locale,
              pathname: "/booking",
              title: t("bookingTitle"),
              description: t("bookingDescription")
            })
          )
        }}
      />
      <BookingSection />
    </>
  );
}
