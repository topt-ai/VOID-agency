import React from "react";
import { useCursor } from "../hooks/useCursor";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const cursorRef = useCursor();

  return <div ref={cursorRef} className={styles.cursor} />;
}
