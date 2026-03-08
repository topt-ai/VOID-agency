import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.headline}>
        <i>Ready to build something extraordinary?</i>
      </h2>

      <button className={styles.cta}>
        <span>Let's Talk</span>
        <ArrowRight className={styles.arrow} size={20} />
      </button>

      <a href="mailto:hello@voidstudio.co" className={styles.email}>
        hello@voidstudio.co
      </a>
    </section>
  );
}
