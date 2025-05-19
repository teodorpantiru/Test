"use client";
import "./globals.css";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ServicesPage from "./components/ServicesPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import servicesData from "./data/servicesData";
import PriceSection from "./components/PriceSection";

export default function Home() {
  const [services] = useState(servicesData);
  const [selectedService, setSelectedService] = useState("");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const priceRef = useRef(null);
  const contactRef = useRef(null);

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
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function handleSelectServices(slug) {
    if (selectedService === slug) {
      setSelectedService(null);
    } else {
      setSelectedService(slug);
    }
  }

  function handleCloseService() {
    setSelectedService(null);
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
        <ServicesPage
          services={services}
          isSelected={selectedService}
          onSelectServices={handleSelectServices}
          onCloseService={handleCloseService}
        />
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
