"use client";
import "./globals.css";
import AboutUs from "./components/AboutUs";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ServicesPage from "./components/ServicesPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import servicesData from "./data/servicesData";

export default function Home() {
  const [services, setServices] = useState(servicesData);
  const [selectedService, setSelectedService] = useState("");

  function handleSelectServices(id) {
    setSelectedService(selectedService ? null : id);
    console.log(id);
  }

  function handleCloseService() {
    setSelectedService(null);
  }

  return (
    <div className="">
      <NavBar />
      <HomePage />
      <AboutUs />
      <ServicesPage
        services={services}
        isSelected={selectedService}
        onSelectServices={handleSelectServices}
        onCloseService={handleCloseService}
      />

      <Contact />
      <Footer />
    </div>
  );
}
