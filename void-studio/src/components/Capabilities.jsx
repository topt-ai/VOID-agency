import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Capabilities.module.css";

const capabilities = [
  "Brand Identity",
  "Motion Design",
  "Web Experiences",
  "Campaign Strategy",
  "Creative Direction",
  "Digital Products",
];

export function Capabilities() {
  return (
    <section className={styles.capabilities}>
      <div className={styles.left}>
        <span className={styles.watermark}>02</span>
      </div>

      <div className={styles.right}>
        <ul className={styles.list}>
          {capabilities.map((cap, index) => (
            <li key={cap} className={styles.item}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")} —
              </span>
              <span className={styles.text}>{cap}</span>
              <ArrowRight className={styles.arrow} size={24} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
