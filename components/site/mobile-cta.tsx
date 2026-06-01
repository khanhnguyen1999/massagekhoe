import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function MobileCTA() {
  const t = await getTranslations("cta");

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] -translate-x-1/2 md:hidden">
      <div className="glass-panel rounded-full border border-primary/10 p-2 shadow-soft">
        <Link href="/booking" className="block">
          <Button className="w-full">{t("button")}</Button>
        </Link>
      </div>
    </div>
  );
}
