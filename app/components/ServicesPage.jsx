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
    if (!detailsRef.current) return;

    // Delay scrolling until DOM is fully updated and painted
    requestAnimationFrame(() => {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // try increasing to 100ms if needed
    });
  }, [isSelected]);

  return (
    <section className="bg-gray-100 px-4 py-18 md:px-10 md:py-22 lg:px-12 lg:py-32 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="scroll-mt-28 text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-400 inline-block pb-2">
          Serviciile Noastre
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service) => (
            <React.Fragment key={service.slug}>
              <li className="col-span-1 ">
                <Services
                  id={service.slug}
                  src={service.SourceImage}
                  title={service.title}
                  onSelectServices={onSelectServices}
                  isSelected={isSelected}
                />
              </li>

              {isSelected === service.slug && (
                <li ref={detailsRef} className="col-span-full scroll-mt-28">
                  <div className="bg-white shadow-xl rounded-xl p-6 mt-4">
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
