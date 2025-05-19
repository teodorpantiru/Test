"use client";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function PriceSection() {
  const packages = [
    {
      name: "Standard",
      features: [
        "Consultanță inițială",
        "Instalare de bază",
        "Asistență telefonică",
      ],
    },
    {
      name: "Profesional",
      features: [
        "Tot ce include Standard",
        "Configurare personalizată",
        "Garanție extinsă",
      ],
    },
    {
      name: "Premium",
      features: [
        "Tot ce include Profesional",
        "Mentenanță prioritară",
        "Suport 24/7",
        "Actualizări gratuite",
      ],
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Pachetele Noastre
        </h2>
        <p className="text-gray-600 mb-10 text-lg max-w-xl mx-auto">
          Toate prețurile se stabilesc în funcție de cerințele specifice ale
          fiecărui proiect. Contactează-ne pentru o ofertă personalizată! 💬
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="border rounded-2xl shadow-md p-8 transition duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-sky-700 mb-4">
                {pkg.name}
              </h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="before:content-['✓'] before:mr-2 before:text-green-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">
                Prețul se discută în urma unei analize detaliate.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
