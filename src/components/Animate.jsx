import { useEffect, useState } from "react";

export default function Animate({ children, delay = 0, duration = 600, direction = "up", className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-10 opacity-0";
        case "down":
          return "-translate-y-10 opacity-0";
        case "left":
          return "translate-x-10 opacity-0";
        case "right":
          return "-translate-x-10 opacity-0";
        case "fade":
          return "opacity-0";
        case "scale":
          return "scale-90 opacity-0";
        default:
          return "translate-y-10 opacity-0";
      }
    }
    return "translate-y-0 translate-x-0 scale-100 opacity-100";
  };

  return (
    <div className={`transition-all ease-out ${getTransformClass()} ${className}`} style={{ transitionDuration: `${duration}ms` }}>
      {children}
    </div>
  );
}
