"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="glass-panel flex items-center gap-1 rounded-full border border-primary/10 p-1">
      {routing.locales.map((item) => (
        <Link
          key={item}
          href={pathname}
          locale={item}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition md:px-3 md:text-xs md:tracking-[0.22em]",
            locale === item
              ? "bg-primary text-secondary"
              : "text-primary/60 hover:bg-secondary"
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
