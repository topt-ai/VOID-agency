import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Philosophy.module.css";

export function Philosophy() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const ruleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // 3 screens of scrolling
          pin: true,
          scrub: 1,
        },
      });

      // Initial state
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], {
        clipPath: "inset(0 100% 0 0)",
      });
      gsap.set(ruleRef.current, { scaleX: 0, transformOrigin: "left" });

      // Animation sequence
      tl.to(line1Ref.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.out",
      })
        .to(
          ruleRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.2",
        )
        .to(
          line2Ref.current,
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power2.out",
          },
          "+=0.2",
        )
        .to(
          line3Ref.current,
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power2.out",
          },
          "+=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className={styles.philosophy} ref={sectionRef}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.statement1} ref={line1Ref}>
          <i>Most agencies make websites.</i>
        </div>

        <div className={styles.rule} ref={ruleRef} />

        <div className={styles.statement2} ref={line2Ref}>
          <i className={styles.bold}>We make weapons.</i>
        </div>

        <div className={styles.statement3} ref={line3Ref}>
          For brands that mean it.
        </div>
      </div>
    </section>
  );
}
