import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BookingSection } from "@/components/sections/booking-section";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("seo");
  return { title: t("bookingTitle") };
}

export default function BookingPage() {
  return <BookingSection />;
}
