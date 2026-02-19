import { useEffect, useState, useRef } from "react";

export default function Animate({
  children,
  delay = 0,
  duration = 800,
  direction = "up",
  className = "",
  threshold = 0.1, // Berapa % elemen harus terlihat sebelum animasi
  once = true, // Animasi hanya sekali atau setiap kali scroll
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer untuk trigger saat scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay sebelum animasi dimulai
            setTimeout(() => {
              setIsVisible(true);
              if (once) {
                setHasAnimated(true);
              }
            }, delay);
          } else if (!once && hasAnimated) {
            // Jika once=false, reset animasi saat keluar viewport
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, once, hasAnimated]);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-12 opacity-0";
        case "down":
          return "-translate-y-12 opacity-0";
        case "left":
          return "translate-x-12 opacity-0";
        case "right":
          return "-translate-x-12 opacity-0";
        case "fade":
          return "opacity-0";
        case "scale":
          return "scale-95 opacity-0";
        case "zoom":
          return "scale-110 opacity-0";
        case "blur":
          return "opacity-0 blur-sm";
        default:
          return "translate-y-12 opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 scale-100 opacity-100 blur-0";
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getTransformClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // Easing lebih smooth
      }}
    >
      {children}
    </div>
  );
}
