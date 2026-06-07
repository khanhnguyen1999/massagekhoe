import { MessageCircleMore, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3">
      <a
        href="https://zalo.me/842873096689"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-glow transition hover:-translate-y-1"
        aria-label="Zalo"
      >
        <MessageCircleMore className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.directCallHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-success text-white shadow-glow transition hover:-translate-y-1"
        aria-label="Call now"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
