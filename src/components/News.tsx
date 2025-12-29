// components/Showcase.tsx
import { Button } from "@/components/ui/button";
import showcaseItems from "@/data/showcaseItems";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const Showcase = () => {
  const SPEED_PX_PER_SEC = 25;
  const CARD_WIDTH = 450;
  const GAP_PX = 24;
  const JUMP_DISTANCE = CARD_WIDTH + GAP_PX;
  const JUMP_DURATION = 400;

  const duplicated = [...showcaseItems, ...showcaseItems, ...showcaseItems];

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isAnimatingJump = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const inner = innerRef.current;
      if (!inner) return;
      halfWidthRef.current = inner.scrollWidth / 3;
    };
    compute();
    const onResize = () => compute();
    window.addEventListener("resize", onResize);
    const t = setTimeout(compute, 600);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const step = (now: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused && !isAnimatingJump.current) {
        posRef.current += (SPEED_PX_PER_SEC * dt) / 1000;
      }

      const inner = innerRef.current;
      const half = halfWidthRef.current || (inner ? inner.scrollWidth / 3 : 1);

      if (posRef.current >= half) posRef.current -= half;
      if (posRef.current < 0) posRef.current += half;

      if (inner) {
        inner.style.transform = `translateX(${-posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [isPaused]);

  const animateTo = (target: number, duration = JUMP_DURATION) => {
    if (isAnimatingJump.current) return Promise.resolve();
    isAnimatingJump.current = true;
    return new Promise<void>((resolve) => {
      const start = performance.now();
      const from = posRef.current;
      const diff = target - from;

      const tick = (t: number) => {
        const elapsed = t - start;
        const p = Math.min(1, elapsed / duration);
        const eased = 1 - (1 - p) * (1 - p);
        posRef.current = from + diff * eased;

        const inner = innerRef.current;
        if (inner) inner.style.transform = `translateX(${-posRef.current}px)`;

        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 3 : 1);
          posRef.current = ((posRef.current % half) + half) % half;
          isAnimatingJump.current = false;
          resolve();
        }
      };

      requestAnimationFrame(tick);
    });
  };

  const handlePrev = async () => {
    setIsPaused(true);
    const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 3 : 1);
    const target = posRef.current - JUMP_DISTANCE;
    let normalized = target;
    if (normalized < 0) normalized += half;
    await animateTo(normalized, JUMP_DURATION);
    setIsPaused(false);
  };

  const handleNext = async () => {
    setIsPaused(true);
    const half = halfWidthRef.current || (innerRef.current ? innerRef.current.scrollWidth / 3 : 1);
    const target = posRef.current + JUMP_DISTANCE;
    let normalized = target;
    if (normalized >= half) normalized -= half;
    await animateTo(normalized, JUMP_DURATION);
    setIsPaused(false);
  };

  const handleVideoClick = (id: number) => {
    setActiveVideo(activeVideo === id ? null : id);
    setIsPaused(true);
  };

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="w-full mx-auto px-6">
        <div className="flex justify-center text-center mx-auto mb-12 px-4">
          <div className="w-full max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">
              Our Showcase
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed">
              Explore our journey through events, achievements, and innovations.
            </p>
          </div>
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (activeVideo === null) setIsPaused(false);
          }}
        >
          {/* Navigation Buttons */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 z-20">
            <div className="pointer-events-auto">
              <Button
                onClick={handlePrev}
                className="hidden sm:flex bg-[#EE4343] text-white hover:bg-[#d63a3a] px-8 py-6 rounded-none"
                aria-label="Previous"
              >
                <ArrowLeft className="w-4 h-4" /> Prev
              </Button>
              <Button
                onClick={handlePrev}
                className="flex sm:hidden bg-[#EE4343] text-white hover:bg-[#d63a3a] px-3 py-2 rounded-full items-center gap-2"
                aria-label="Previous mobile"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 z-20">
            <div className="pointer-events-auto">
              <Button
                onClick={handleNext}
                className="hidden sm:flex bg-[#EE4343] text-white hover:bg-[#d63a3a] px-8 py-6 rounded-none items-center gap-2"
                aria-label="Next"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleNext}
                className="flex sm:hidden bg-[#EE4343] text-white hover:bg-[#d63a3a] px-3 py-2 rounded-full items-center gap-2"
                aria-label="Next mobile"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel Track */}
          <div ref={wrapperRef} className="w-full overflow-hidden">
            <div
              ref={innerRef}
              className="flex items-start gap-6 will-change-transform"
              style={{
                transform: "translateX(0px)",
                transition: isAnimatingJump.current ? `transform ${JUMP_DURATION}ms ease-out` : "none",
              }}
            >
              {duplicated.map((item, idx) => (
                <div
                  key={idx}
                  className="group block min-w-[280px] max-w-[280px] md:min-w-[450px] md:max-w-[450px] flex-shrink-0"
                >
                  <article className="cursor-pointer">
                    <div className="relative overflow-hidden mb-4 rounded-lg">
                      {item.type === "video" ? (
                        <>
                          {activeVideo === item.id ? (
                            <video
                              src={item.media}
                              className="w-full h-48 md:h-80 object-cover"
                              controls
                              autoPlay
                              onEnded={() => {
                                setActiveVideo(null);
                                setIsPaused(false);
                              }}
                            />
                          ) : (
                            <div
                              className="relative"
                              onClick={() => handleVideoClick(item.id)}
                            >
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-48 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              {/* Play Button Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EE4343] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <img
                          src={item.media}
                          alt={item.title}
                          className="w-full h-48 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 border border-gray-200 group-hover:border-[#EE4343] transition-colors duration-300 rounded-lg pointer-events-none"></div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold leading-tight text-black group-hover:text-[#EE4343] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 hover:bg-[#EE4343] hover:text-white transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;