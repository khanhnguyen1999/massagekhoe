import { getLocalePath, locales } from "@/lib/data";

const routes = ["", "/about", "/services", "/booking", "/contact"];
const lastModified = "2026-06-07";

export async function GET() {
  const urls = locales.flatMap((locale) =>
    routes.map((route) => {
      const url = getLocalePath(locale, route);
      const changefreq = route === "" ? "weekly" : "monthly";
      const priority = route === "" ? "1.0" : "0.8";

      return [
        "  <url>",
        `    <loc>${escapeXml(url)}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400"
    }
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
