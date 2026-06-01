import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function CtaBanner() {
  const t = await getTranslations("cta");

  return (
    <section className="section-padding pt-8">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-secondary shadow-glow md:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">{t("title")}</h2>
            </div>
            <Link href="/booking">
              <Button variant="outline" className="border-secondary/20 bg-secondary text-primary hover:bg-secondary/90">
                {t("button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
