import type { Metadata } from "next";
import { branches, getLocalePath, siteConfig, type SupportedLocale } from "@/lib/data";

export function buildPageMetadata({
  locale,
  pathname,
  title,
  description
}: {
  locale: SupportedLocale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = getLocalePath(locale, pathname);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        vi: getLocalePath("vi", pathname),
        en: getLocalePath("en", pathname)
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "vi_VN",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/twitter-image`]
    }
  };
}

export function buildLocalBusinessSchema(locale: SupportedLocale, pathname: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${getLocalePath(locale, pathname)}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: getLocalePath(locale, pathname),
    image: `${siteConfig.url}/logo/logo.png`,
    logo: `${siteConfig.url}/logo/logo.png`,
    telephone: siteConfig.directCallDisplay,
    priceRange: "$$",
    address: branches.map((branch) => ({
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN"
    })),
    areaServed: ["Binh Thanh", "Phu Nhuan", "Ho Chi Minh City"]
  };
}

export function buildWebPageSchema({
  locale,
  pathname,
  title,
  description
}: {
  locale: SupportedLocale;
  pathname: string;
  title: string;
  description: string;
}) {
  const url = getLocalePath(locale, pathname);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: locale === "en" ? "en-US" : "vi-VN",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}
