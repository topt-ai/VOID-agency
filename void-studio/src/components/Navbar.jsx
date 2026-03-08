import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import clsx from "clsx";
import styles from "./Navbar.module.css";

export function Navbar({ isLoaded }) {
  const [scrolled, setScrolled] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isLoaded && lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          transformOrigin: "left",
        },
      );
    }
  }, [isLoaded]);

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            <i>VOID</i>
            <sup>®</sup>
          </a>
        </div>

        <div className={styles.right}>
          <ul className={styles.links}>
            {["Work", "Studio", "Process", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={styles.link}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className={styles.cta}>Let's Talk</button>
        </div>
      </div>
      <div ref={lineRef} className={styles.line} />
    </nav>
  );
}
