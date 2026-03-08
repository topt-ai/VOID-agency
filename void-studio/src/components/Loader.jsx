import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Loader.module.css";

export function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.children;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Type in character by character
    tl.fromTo(
      chars,
      { opacity: 0 },
      { opacity: 1, duration: 0.1, stagger: 0.15, ease: "none" },
      0,
    );

    // Fade out and scale up
    tl.to(
      textRef.current,
      { opacity: 0, scale: 1.1, duration: 0.4, ease: "power2.inOut" },
      0.8,
    );

    // Fade out container
    tl.to(
      containerRef.current,
      { opacity: 0, duration: 0.4, ease: "power2.inOut" },
      1.2,
    );
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.loader}>
      <div ref={textRef} className={styles.text}>
        <span>V</span>
        <span>O</span>
        <span>I</span>
        <span>D</span>
      </div>
    </div>
  );
}
