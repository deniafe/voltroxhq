import React, { useEffect, useRef } from "react";
import { TimelineMax, TweenMax, Sine } from "gsap";

export const CircleAnimation = () => {
  const wrapperRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    const wrapper = wrapperRef.current;
    const sine = Sine.easeInOut;
    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    /* Animation */
    TweenMax.set(circles, { drawSVG: "35% 35%" });

    const tl = new TimelineMax({ repeat: -1, repeatDelay: -0.13 });

    tl.staggerTo(circles, 0.8, { drawSVG: "5% 95%", ease: sine }, 0.25, 0);
    tl.staggerTo(circles, 0.6, { drawSVG: "75% 75%", ease: sine }, 0.25, 0.8);

    return () => {
      tl.kill(); // Clean up the animation when the component unmounts
    };
  }, []);

  return (
    <svg className="wrapper" viewBox="0 0 200 200" width="350px" height="350px" ref={wrapperRef}>
      {[...Array(7)].map((_, index) => (
        <circle
          key={index}
          className={`circle c-${index}`}
          cx="100"
          cy="100"
          r={6 * (index + 1)}
          ref={(el) => (circlesRef.current[index] = el)}
        />
      ))}
    </svg>
  );
};
