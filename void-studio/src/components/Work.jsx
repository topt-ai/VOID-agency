import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import styles from "./Work.module.css";

const projects = [
  {
    id: 1,
    name: "Aether",
    category: "Brand Identity",
    year: "2024",
    type: "large",
  },
  {
    id: 2,
    name: "Nexus",
    category: "Digital Experience",
    year: "2023",
    type: "small",
  },
  {
    id: 3,
    name: "Lumina",
    category: "Motion Design",
    year: "2023",
    type: "small",
  },
  {
    id: 4,
    name: "Vanguard",
    category: "Web Experience",
    year: "2024",
    type: "large",
  },
  {
    id: 5,
    name: "Onyx",
    category: "Campaign Strategy",
    year: "2022",
    type: "large",
  },
  {
    id: 6,
    name: "Prism",
    category: "Digital Product",
    year: "2023",
    type: "small",
  },
];

export function Work() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className={styles.work} ref={sectionRef}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <i>Selected Work</i>
        </h2>
        <span className={styles.counter}>(06)</span>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={clsx(styles.card, styles[project.type])}
          >
            <div className={styles.overlay}>
              <div className={styles.details}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.meta}>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
