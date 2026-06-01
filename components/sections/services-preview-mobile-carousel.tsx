"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ServicePackage = {
  key: string;
  duration: string;
  price: string;
  subtitle: string;
  items: string[];
};

type ServicesPreviewMobileCarouselProps = {
  services: ServicePackage[];
  packageLabel: string;
  includesLabel: string;
};

export function ServicesPreviewMobileCarousel({
  services,
  packageLabel,
  includesLabel
}: ServicesPreviewMobileCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const width = container.clientWidth;
      if (!width) return;
      const index = Math.round(container.scrollLeft / width);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth"
    });
  };

  return (
    <div className="md:hidden">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, index) => (
          <article
            key={service.key}
            className="glass-panel min-w-full snap-center rounded-[1.5rem] border border-primary/10 p-5 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              {packageLabel} {index + 1}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <h3 className="font-heading text-2xl text-primary">{service.duration}</h3>
              <p className="text-base font-semibold text-primary">{service.price}</p>
            </div>
            <p className="mt-2 text-sm text-primary/55">{service.subtitle}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/50">
              {includesLabel}
            </p>
            <ul className="mt-4 space-y-2.5">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-primary/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {services.map((service, index) => (
          <button
            key={service.key}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              activeIndex === index ? "w-8 bg-primary" : "w-2.5 bg-primary/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
