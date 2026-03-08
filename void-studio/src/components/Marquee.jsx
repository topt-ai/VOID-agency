import React from "react";
import styles from "./Marquee.module.css";

export function Marquee() {
  const content =
    "BRANDING — MOTION — WEB — IDENTITY — CAMPAIGNS — STRATEGY — DIGITAL — EXPERIENCE — ";

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {content}
          {content}
        </div>
        <div className={styles.marqueeContent}>
          {content}
          {content}
        </div>
      </div>
    </div>
  );
}
