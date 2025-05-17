"use client";

import React, { useRef, useLayoutEffect } from "react";
import Services from "./Services";
import ServicesDetails from "./ServicesDetails";

export default function ServicesPage({
  onSelectServices,
  services,
  isSelected,
  onCloseService,
}) {
  const detailsRef = useRef(null);

  useLayoutEffect(() => {
    if (detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 10); // slight delay helps on mobile
    }
  }, [isSelected]);

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 border-b-2 inline-block pb-2">
          Serviciile Noastre
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <React.Fragment key={service.slug}>
              <li className="col-span-1">
                <Services
                  id={service.slug}
                  src={service.SourceImage}
                  title={service.title}
                  onSelectServices={onSelectServices}
                  isSelected={isSelected}
                />
              </li>

              {isSelected === service.slug && (
                <li
                  ref={detailsRef}
                  className="col-span-full scroll-mt-24" // Adjust margin-top if sticky navbar
                >
                  <div className="bg-white shadow-md rounded-xl p-6 mt-4">
                    <ServicesDetails
                      selectedService={service}
                      onCloseService={onCloseService}
                    />
                  </div>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
