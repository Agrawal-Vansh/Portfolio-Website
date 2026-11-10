
import { useEffect, useState } from "react";

const ProjectGallery = ({ screenshots = [], projectTitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const hasScreenshots = screenshots.length > 0;
  const activeImage = screenshots[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + screenshots.length) % screenshots.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      (current + 1) % screenshots.length
    );
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          (current - 1 + screenshots.length) % screenshots.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          (current + 1) % screenshots.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, screenshots.length]);

  if (!hasScreenshots) {
    return (
      <div className="
        w-full aspect-video rounded-2xl
        bg-slate-100 border border-slate-200
        dark:bg-white/5 dark:border-white/10
        flex items-start justify-center
      ">
        <span className="
          text-slate-400 dark:text-white/30
          text-lg font-semibold
        ">
          {projectTitle}
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="w-full space-y-3">

        {/* MAIN IMAGE */}
        <div className="
          relative group overflow-hidden rounded-2xl
          border border-slate-200 dark:border-white/10
          bg-slate-100 dark:bg-[#080d10]
        ">

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="block w-full cursor-zoom-in"
            aria-label={`View ${projectTitle} screenshot in full screen`}
          >
            <img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              className="
                w-full aspect-video
                object-contain
                transition-all duration-500
                group-hover:scale-[1.02]
              "
            />

            <span className="
              absolute bottom-4 right-4
              px-3 py-2 rounded-lg
              bg-black/70 backdrop-blur-md
              text-white/80 text-xs
              opacity-0 group-hover:opacity-100
              transition-opacity
            ">
              Click to expand ↗
            </span>
          </button>

          {/* IMAGE COUNTER */}
          <span className="
            absolute top-4 right-4
            px-3 py-1 rounded-full
            bg-black/70 backdrop-blur-md
            text-white/80 text-xs
            pointer-events-none
          ">
            {activeIndex + 1} / {screenshots.length}
          </span>

        </div>

        {/* THUMBNAILS */}
        {screenshots.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">

            {screenshots.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show screenshot ${index + 1} of ${projectTitle}`}
                aria-pressed={activeIndex === index}
                className={`
                  shrink-0 w-24 sm:w-28
                  rounded-xl overflow-hidden
                  border-2 transition-all duration-300
                  ${
                    activeIndex === index
                      ? "border-teal-500 dark:border-teal-400 opacity-100 shadow-[0_0_12px_rgba(45,212,191,0.3)]"
                      : "border-slate-300 dark:border-white/10 opacity-60 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={image.src}
                  alt=""
                  className="w-full aspect-video object-cover"
                />
              </button>
            ))}

          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {isLightboxOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            bg-black/95 backdrop-blur-xl
            flex items-start justify-center
            p-4 sm:p-8
          "
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot viewer`}
        >

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image viewer"
            className="
              absolute top-5 right-5
              w-11 h-11 rounded-full
              bg-white/10 text-white
              text-2xl hover:bg-white/20
              transition
            "
          >
            ×
          </button>

          {/* PREVIOUS */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous screenshot"
              className="
                absolute left-3 sm:left-8
                w-11 h-11 rounded-full
                bg-white/10 text-white text-2xl
                hover:bg-teal-500/30 transition
              "
            >
              ‹
            </button>
          )}

          {/* FULL IMAGE */}
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
            className="
              max-w-full max-h-[85vh]
              object-contain rounded-lg
              shadow-2xl
            "
          />

          {/* NEXT */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next screenshot"
              className="
                absolute right-3 sm:right-8
                w-11 h-11 rounded-full
                bg-white/10 text-white text-2xl
                hover:bg-teal-500/30 transition
              "
            >
              ›
            </button>
          )}

          {/* COUNTER */}
          <span className="
            absolute bottom-5
            text-white/60 text-sm
          ">
            {activeIndex + 1} / {screenshots.length}
          </span>

        </div>
      )}
    </>
  );
};

export default ProjectGallery;
