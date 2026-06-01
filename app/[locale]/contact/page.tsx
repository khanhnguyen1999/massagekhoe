import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactSection } from "@/components/sections/contact-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return { title: t("contactTitle") };
}

export default function ContactPage() {
  return <ContactSection />;
}
