import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Studio.module.css";

export function Studio() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate EST. 2019 characters
      const chars = textRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        },
      );

      // Animate counters
      statsRef.current.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"), 10);
        gsap.to(stat, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const estText = "EST. 2019";

  return (
    <section id="studio" className={styles.studio} ref={sectionRef}>
      <div className={styles.left}>
        <h2 className={styles.est} ref={textRef}>
          {estText.split("").map((char, i) => (
            <span key={i} className={char === " " ? styles.space : ""}>
              {char}
            </span>
          ))}
        </h2>
      </div>

      <div className={styles.right}>
        <div className={styles.copy}>
          <p>
            VOID is an independent creative studio crafting digital experiences
            for brands that refuse to be ordinary.
          </p>
          <p>
            We combine strategy, design, and technology to create work that
            outlasts trends. Our approach is rooted in a deep understanding of
            human behavior and a relentless pursuit of aesthetic perfection.
          </p>
          <p>
            We don't just build websites; we build living artifacts that command
            attention and drive meaningful engagement.
          </p>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span
              className={styles.number}
              ref={(el) => (statsRef.current[0] = el)}
              data-target="40"
            >
              0
            </span>
            <span className={styles.plus}>+</span>
            <span className={styles.label}>Clients</span>
          </div>
          <div className={styles.stat}>
            <span
              className={styles.number}
              ref={(el) => (statsRef.current[1] = el)}
              data-target="120"
            >
              0
            </span>
            <span className={styles.plus}>+</span>
            <span className={styles.label}>Projects</span>
          </div>
          <div className={styles.stat}>
            <span
              className={styles.number}
              ref={(el) => (statsRef.current[2] = el)}
              data-target="7"
            >
              0
            </span>
            <span className={styles.label}>Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
