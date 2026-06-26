import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselSlide {
  src: string;
  caption?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  /** show 3-up rotating drum style (center bigger). default true */
  drum?: boolean;
  autoplayMs?: number;
}

export function ImageCarousel({ slides, drum = true, autoplayMs = 4000 }: ImageCarouselProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla || !autoplayMs) return;
    const id = setInterval(() => embla.scrollNext(), autoplayMs);
    return () => clearInterval(id);
  }, [embla, autoplayMs]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex items-center -mx-2">
          {slides.map((s, i) => {
            const isCenter = i === index;
            return (
              <div
                key={i}
                className={cn(
                  "px-2 min-w-0 transition-all duration-500",
                  drum
                    ? "flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_38%]"
                    : "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-500",
                    drum && isCenter ? "scale-100 opacity-100" : drum ? "scale-90 opacity-70" : ""
                  )}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={s.src}
                      alt={s.caption ?? `Slide ${i + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                  {s.caption ? (
                    <div className="px-4 py-3">
                      <p className="text-sm font-medium text-foreground">{s.caption}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute -left-2 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-card text-foreground shadow-card hover:bg-surface-2 sm:left-2"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute -right-2 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-card text-foreground shadow-card hover:bg-surface-2 sm:right-2"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-8 bg-brand" : "w-3 bg-border hover:bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
