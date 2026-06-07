import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

export async function MobileCTA() {
  const t = await getTranslations("cta");

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-1.5rem)] -translate-x-1/2 md:hidden">
      <div className="glass-panel rounded-full border border-primary/10 p-2 shadow-soft">
        <a href={siteConfig.directCallHref} className="block">
          <Button className="w-full">{t("button")}</Button>
        </a>
      </div>
    </div>
  );
}
