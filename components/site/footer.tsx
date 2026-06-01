import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { branches } from "@/lib/data";
import { Logo } from "@/components/site/logo";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="mt-12 border-t border-primary/10 bg-[#f5ede3]">
      <div className="container grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-7 text-primary/70">
            {t("footer.company")}
          </p>
          <p className="text-sm text-primary/70">
            {branches[0].address}
            <br />
            {branches[1].address}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg text-primary">{t("footer.links")}</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-primary/70">
            <Link href="/">{t("nav.home")}</Link>
            <Link href="/about">{t("nav.about")}</Link>
            <Link href="/services">{t("nav.services")}</Link>
            <Link href="/booking">{t("nav.booking")}</Link>
            <Link href="/contact">{t("nav.contact")}</Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg text-primary">{t("footer.hours")}</h3>
          <p className="mt-4 text-sm leading-7 text-primary/70">
            {t("footer.hoursValue")}
          </p>
          <p className="mt-4 text-sm leading-7 text-primary/70">
            {branches.map((branch) => branch.phone).join(" / ")}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg text-primary">{t("footer.social")}</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-primary/70">
            <a href="https://zalo.me" target="_blank" rel="noreferrer">
              Zalo
            </a>
            <a href="https://wa.me/842873096689" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10 py-5">
        <div className="container text-sm text-primary/60">
          © 2026 Massage Khỏe Việt. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
