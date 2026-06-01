import { HeartHandshake } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary shadow-glow md:h-11 md:w-11">
        <HeartHandshake className="h-4 w-4 md:h-5 md:w-5" />
      </div>
      <div>
        <p className="font-heading text-base font-semibold leading-none text-primary md:text-lg">
          Massage Khỏe Việt
        </p>
      </div>
    </div>
  );
}
