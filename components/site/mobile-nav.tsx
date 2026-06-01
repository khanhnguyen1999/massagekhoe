"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/site/language-switcher";

type MobileNavProps = {
  links: Array<{ href: string; label: string }>;
  bookNowLabel: string;
};

export function MobileNav({ links, bookNowLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 md:hidden">
        <LanguageSwitcher />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary shadow-soft transition hover:border-accent/40"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-background/95 md:hidden">
          <div className="flex min-h-screen flex-col px-5 pb-8 pt-5 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-primary/10 pb-4">
              <p className="font-heading text-2xl text-primary">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[1.25rem] border border-primary/10 bg-white px-4 py-4 text-base font-medium text-primary/80 transition hover:border-accent/40 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4 pt-8">
              <Link href="/booking" onClick={() => setOpen(false)} className="block">
                <Button className="w-full">{bookNowLabel}</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
