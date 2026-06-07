import type { MetadataRoute } from "next";
import { getLocalePath, locales } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/booking", "/contact"];
  const lastModified = new Date("2026-06-07T00:00:00.000Z");
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getLocalePath(locale, route),
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    }))
  );
}
