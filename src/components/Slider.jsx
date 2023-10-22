import { useRef, useState } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastAction, setLastAction] = useState("");
  const slider = useRef(null);

  let visibleImages;
  if (lastAction === "next") {
    visibleImages = [
      images[currentIndex === 0 ? images.length - 1 : currentIndex - 1],
      images[currentIndex],
    ];
  } else if (lastAction === "prev") {
    visibleImages = [
      images[currentIndex],
      images[currentIndex === images.length - 1 ? 0 : currentIndex + 1],
    ];
  } else {
    visibleImages = [images[currentIndex]];
  }

  function showPrevSlide() {
    if (slider.current.getBoundingClientRect().left > -100) {
      setLastAction("prev");
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1,
      );
    }
  }
  function showNextSlide() {
    if (slider.current.getBoundingClientRect().left < 100) {
      setLastAction("next");
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1,
      );
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="relative aspect-[15/12] max-h-[500px] w-full overflow-hidden md:rounded-[16px] md:aspect-square md:max-h-full">
          <div
            ref={slider}
            key={currentIndex}
            className={`flex ${
              lastAction !== "" &&
              (lastAction === "next"
                ? "animate-slide-next justify-end"
                : "animate-slide-prev justify-start")
            }`}
          >
            {visibleImages.map(({ url, alt }, index) => (
              <img
                key={index}
                src={url}
                alt={alt}
                className="inline-block min-w-full object-cover"
              />
            ))}
          </div>

          <button
            className="absolute left-[16px] top-1/2 flex aspect-square w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white md:hidden"
            onClick={showPrevSlide}
          >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute right-[16px] top-1/2 flex aspect-square w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white md:hidden"
            onClick={showNextSlide}
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-[32px] hidden w-full justify-between gap-[16px] md:flex">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setLastAction("");
                setCurrentIndex(index);
              }}
              className={`aspect-square w-[90px] overflow-hidden rounded-[8px] ${currentIndex === index ? "border-orange border-[2px]" : ""} `}
            >
              <img className={currentIndex === index ? "opacity-50" : "hover:opacity-60"} src={image.url} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
