import Script from "next/script";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig, type SupportedLocale } from "@/lib/data";
import { buildLocalBusinessSchema, buildPageMetadata } from "@/lib/seo";
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
  return buildPageMetadata({
    locale: locale as SupportedLocale,
    pathname: "",
    title: siteConfig.name,
    description: siteConfig.description
  });
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
  const schema = buildLocalBusinessSchema(locale as SupportedLocale, "");

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
