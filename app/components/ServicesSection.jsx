"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import servicesData from "../data/servicesData";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedService = servicesData.find((s) => s.id === selectedId);
  const cardRef = useRef(null);

  useEffect(() => {
    if (selectedService && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedService]);

  const handleToggle = (serviceId) => {
    if (selectedId === serviceId) {
      setSelectedId(null); // închide cardul dacă e deja deschis
    } else {
      setSelectedId(serviceId); // deschide cardul selectat
    }
  };

  const groupedServices = useMemo(() => {
    const result = [];
    for (let i = 0; i < servicesData.length; i += 3) {
      result.push(servicesData.slice(i, i + 3));
    }
    return result;
  }, []);

  return (
    <section
      id="services-section"
      className="bg-gray-100 px-4 py-25 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Serviciile Noastre
        </h2>

        {groupedServices.map((group, rowIndex) => (
          <div key={rowIndex} className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleToggle(service.id)}
                  className={`cursor-pointer bg-white shadow-xl rounded-xl p-4 sm:p-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50 ${
                    selectedId === service.id ? "border border-sky-500" : ""
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
              ))}
            </div>

            {/* Cardul universal sub grupul curent */}
            {group.some((s) => s.id === selectedId) && selectedService && (
              <div className="mt-8 flex justify-center">
                <div
                  ref={cardRef}
                  className="scroll-mt-70 bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-600 relative animate-fadeInScale"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl leading-none"
                    aria-label="Închide"
                  >
                    &times;
                  </button>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {selectedService.title}
                  </h3>

                  <p className="text-black">
                    {selectedService.description}
                  </p>

                  {/* 🔗 Link către pagina dedicată SEO */}
                  <Link
                    href={`/servicii/${selectedService.slug}`}
                    className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                  >
                    Citește mai mult despre {selectedService.title}
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
