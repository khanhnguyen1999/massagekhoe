import Script from "next/script";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { branches, siteConfig } from "@/lib/data";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { MobileCTA } from "@/components/site/mobile-cta";

function isValidLocale(value: string): value is (typeof routing.locales)[number] {
  return routing.locales.includes(value as (typeof routing.locales)[number]);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        vi: `${siteConfig.url}/vi`,
        en: `${siteConfig.url}/en`
      }
    },
    openGraph: {
      images: [
        {
          url: `${siteConfig.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Spa",
    name: siteConfig.name,
    description: siteConfig.description,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: branches[0].phone,
    address: branches.map((branch) => ({
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN"
    })),
    areaServed: ["Binh Thanh", "Phu Nhuan", "Ho Chi Minh City"],
    inLanguage: locale === "en" ? "en-US" : "vi-VN"
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </div>
    </NextIntlClientProvider>
  );
}
