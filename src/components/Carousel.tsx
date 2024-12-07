import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    url: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=2000&q=80",
    alt: "Dashboard View"
  },
  {
    url: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=2000&q=80",
    alt: "Analytics View"
  },
  {
    url: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=2000&q=80",
    alt: "Settings View"
  }
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <div className="relative aspect-[16/9]">
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white disabled:opacity-50"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white disabled:opacity-50"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {screenshots.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}