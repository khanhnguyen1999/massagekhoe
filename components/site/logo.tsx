import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-full md:h-11 md:w-11">
        <Image
          src="/logo/logo.png"
          alt="Massage Khỏe Việt logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <p className="font-heading text-base font-semibold leading-none text-primary md:text-lg">
          Massage Khỏe Việt
        </p>
      </div>
    </div>
  );
}
