import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { MobileNav } from "@/components/site/mobile-nav";
import { siteConfig } from "@/lib/data";

export async function Navbar() {
  const t = await getTranslations("nav");

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/booking", label: t("booking") },
    { href: "/contact", label: t("contact") }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl">
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <Link href="/" aria-label="Massage Khoẻ Việt Home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary/70 transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a href={siteConfig.directCallHref}>
              <Button>{t("bookNow")}</Button>
            </a>
          </div>

          <MobileNav links={links} bookNowLabel={t("bookNow")} />
        </div>
      </div>
    </header>
  );
}
