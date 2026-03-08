import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export function Hero({ isLoaded }) {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const chars = ["0", "1", "/", "\\", "_", "|"];
    const fontSize = 14;
    let columns;
    let drops;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * height;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(8, 8, 8, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(245, 245, 240, 0.05)"; // 5% opacity white
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && contentRef.current) {
      const elements = contentRef.current.children;
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    }
  }, [isLoaded]);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content} ref={contentRef}>
        <h1 className={styles.headline}>
          <span className={styles.line}>
            <i>We build</i>
          </span>
          <span className={styles.line}>
            <i>the things</i>
          </span>
          <span className={styles.line}>
            <i className={styles.bold}>people remember.</i>
            <sup className={styles.sup}>®</sup>
          </span>
        </h1>

        <p className={styles.subtext}>
          Digital experiences for brands that refuse to be ordinary.
        </p>

        <div className={styles.ctaRow}>
          <a href="#work" className={styles.cta}>
            View Work ↗
          </a>
          <div className={styles.rule} />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
