"use client"; // only if you're using App Router and this is in /app

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMessage, faPhoneVolume, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image src={logo} width={60} height={60} alt="Cremil logo" />
          <span className="text-xl font-bold tracking-wide">Cremil T.S.P.I</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          <a href="#acasa" className="hover:text-gray-300 transition">Acasă</a>
          <a href="#despre" className="hover:text-gray-300 transition">Despre</a>
          <a href="#servicii" className="hover:text-gray-300 transition">Servicii</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* Contact Icons - Desktop */}
        <div className="hidden md:flex gap-5 text-white text-lg">
          <a href="#"><FontAwesomeIcon icon={faLocationDot} className="hover:text-gray-300 transition" /></a>
          <a href="#"><FontAwesomeIcon icon={faMessage} className="hover:text-gray-300 transition" /></a>
          <a href="#"><FontAwesomeIcon icon={faPhoneVolume} className="hover:text-gray-300 transition" /></a>
        </div>

        {/* Hamburger Icon - Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 bg-neutral-900 flex flex-col gap-4 text-sm font-medium uppercase text-white">
          <a href="#acasa" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">Acasă</a>
          <a href="#despre" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">Despre</a>
          <a href="#servicii" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">Servicii</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300 transition">Contact</a>
          <div className="flex gap-4 pt-2">
            <a href="#"><FontAwesomeIcon icon={faLocationDot} /></a>
            <a href="#"><FontAwesomeIcon icon={faMessage} /></a>
            <a href="#"><FontAwesomeIcon icon={faPhoneVolume} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
