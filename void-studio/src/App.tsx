import React, { useState } from "react";
import { useLenis } from "./hooks/useLenis";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Work } from "./components/Work";
import { Philosophy } from "./components/Philosophy";
import { Capabilities } from "./components/Capabilities";
import { Studio } from "./components/Studio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useLenis();

  return (
    <>
      <CustomCursor />
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <Navbar isLoaded={isLoaded} />
      <main>
        <Hero isLoaded={isLoaded} />
        <Marquee />
        <Work />
        <Philosophy />
        <Capabilities />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
