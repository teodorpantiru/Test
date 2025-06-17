"use client";

import { useState, useRef, useEffect } from "react";
import servicesData from "../data/servicesData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState(null);
  const detailsRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (detailsRef.current) {
      const topOffset =
        detailsRef.current.getBoundingClientRect().top + window.scrollY - 280; // -100px offset
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [selectedId]);

  const handleToggle = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services-section"
      className="bg-gray-100 px-4 py-18 md:px-10 lg:px-20 lg:py-30"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Serviciile Noastre
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const isSelected = selectedId === service.id;

            return (
              <React.Fragment key={service.id}>
                {/* CARD */}
                <div
                  onClick={() => handleToggle(service.id)}
                  className={`cursor-pointer bg-white shadow-xl rounded-xl p-4 sm:p-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50 ${
                    isSelected ? "border border-sky-500" : ""
                  }`}
                >
                  <Image
                    src={service.SourceImage}
                    alt={service.title}
                    width={96}
                    height={96}
                    className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 shrink-0"
                  />
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-base font-semibold sm:text-md text-gray-800 hover:text-sky-700 transition-colors duration-300 leading-snug break-words">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* DETALII */}
                {isSelected && (
                  <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-4">
                    <div
                      ref={detailsRef}
                      className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-600 relative animate-fadeInScale max-w-6xl mx-auto"
                    >
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl leading-none"
                        aria-label="Închide"
                      >
                        &times;
                      </button>

                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        {service.title}
                      </h3>

                      <p className="text-black">{service.description}</p>

                      <Link
                        href={`/servicii/${service.slug}?from=services#services-section`}
                        className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                      >
                        Citește mai mult despre {service.title}
                      </Link>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
