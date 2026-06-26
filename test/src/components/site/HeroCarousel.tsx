import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  src: string;
  title: string;
  caption?: string;
}

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [embla]);

  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <img
                  src={s.src}
                  alt={s.title}
                  width={1600}
                  height={900}
                  className="absolute inset-0 size-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                    {s.caption}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white sm:text-xl">{s.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white/90 text-navy-deep shadow hover:bg-white"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-white/90 text-navy-deep shadow hover:bg-white"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-8 bg-brand" : "w-3 bg-white/60 hover:bg-white"
            )}
          />
        ))}
      </div>
    </div>
  );
}
