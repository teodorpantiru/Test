"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative isolate bg-gradient-to-br from-sky-50 via-white to-gray-100 overflow-hidden px-4 py-18 md:px-10 md:py-22 lg:px-12 lg:py-32">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/grid.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titlu principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 leading-tight scroll-mt-28 font-bold inline-block pb-2">
            Ia legătura cu noi, <br className="sm:hidden" />
            <span className="text-sky-600">Suntem aici pentru tine!</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto ">
            Ai întrebări? Ai nevoie de o ofertă personalizată? Sau pur și simplu
            vrei să discutăm? Suntem la un apel distanță. ☎️
          </p>
        </div>

        {/* Conținut */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Card de contact */}
          <div className="bg-white shadow-xl rounded-3xl p-10 lg:p-12 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50">
            <div className="space-y-6 text-gray-700 text-lg">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-sky-600 text-2xl mt-1" />
                <div>
                  <p className="font-bold">Adresă:</p>
                  <p>Str. Eroilor 380, Floresti, Cluj</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-sky-600 text-2xl mt-1" />
                <div>
                  <p className="font-bold">Telefon:</p>
                  <a
                    href="tel:+40753541498"
                    className="hover:text-sky-700 transition"
                  >
                    +40 753 541 498
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-sky-600 text-2xl mt-1" />
                <div>
                  <p className="font-bold">Email:</p>
                  <a
                    href="mailto:creta_gabriel@hotmail.it"
                    className="hover:text-sky-700 transition"
                  >
                    office@cremil-tspi.com
                  </a>
                </div>
              </div>
            </div>

            <blockquote className="mt-10 italic text-gray-500 border-l-4 border-sky-200 pl-4">
              „Profesionalismul nu este doar un serviciu – este o atitudine.
              Suntem aici pentru a construi spații mai sigure.”
            </blockquote>
          </div>

          {/* Hartă */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] border-4 border-white transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.5485424299145!2d23.480672376776806!3d46.73436534780091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749102f392a42d5%3A0x4b2a8e8ffe34d8d!2sStr.%20Eroilor%20380%2C%20Flore%C8%99ti%20407280!5e0!3m2!1sro!2sro!4v1748456657535!5m2!1sro!2sro"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
