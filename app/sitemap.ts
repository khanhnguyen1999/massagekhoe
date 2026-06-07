import type { MetadataRoute } from "next";
import { getLocalePath, locales } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/booking", "/contact"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: getLocalePath(locale, route),
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    }))
  );
}
