// app/components/ClientPageWrapper.jsx
"use client";

import "./../globals.css";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Footer from "./Footer";
import PriceSection from "./PriceSection";
import ServicesSection from "./ServicesSection";

export default function ClientPageWrapper() {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("service");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const priceRef = useRef(null);
  const contactRef = useRef(null);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (selectedSlug && servicesRef.current && isInitialLoad) {
      const yOffset = -120;
      const y = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "auto" });
      setIsInitialLoad(false);
    }
  }, [selectedSlug, isInitialLoad]);

  function handleNavigate(section) {
    const refs = {
      acasa: homeRef,
      despre: aboutRef,
      servicii: servicesRef,
      preturi: priceRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div>
      <NavBar onNavigate={handleNavigate} />
      <div ref={homeRef}>
        <HomePage />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={servicesRef}>
        <main>
          <ServicesSection />
        </main>
      </div>
      <div ref={priceRef}>
        <PriceSection />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
