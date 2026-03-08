import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>©2025 VOID Studio. All rights reserved.</div>

      <div className={styles.center}>
        <span className={styles.dot} />
        SYSTEM OPERATIONAL
      </div>

      <div className={styles.right}>
        <a href="#" className={styles.social}>
          TW
        </a>
        <span className={styles.separator}>—</span>
        <a href="#" className={styles.social}>
          IG
        </a>
        <span className={styles.separator}>—</span>
        <a href="#" className={styles.social}>
          LI
        </a>
      </div>
    </footer>
  );
}
