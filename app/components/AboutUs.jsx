"use client";
import Image from "next/image";
import security from "../../public/assets/security.webp";

export default function AboutUs({ aboutRef }) {
  return (
    <section className="relative isolate bg-gradient-to-br from-sky-100 via-white to-gray-100 overflow-hidden px-4 py-18 md:px-10 md:py-22 lg:px-12 lg:py-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/grid.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left">
          <h2
            ref={aboutRef}
            className="scroll-mt-28 text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-400 inline-block pb-2"
          >
            Despre noi
          </h2>
          <p className="text-gray-700 text-base  sm:text-lg leading-relaxed mb-8 lg:text-left">
            Dacă sunteți în căutarea unei soluții profesioniste pentru
            securitatea locuinței sau a afacerii dumneavoastră, echipa{" "}
            <span className="font-semibold">Cremil T.S.P.I</span> vă stă la
            dispoziție. Cu o vastă experiență în domeniul securității, vă
            garantăm servicii de cea mai înaltă calitate, personalizate nevoilor
            dumneavoastră specifice.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-full">
          <Image
            src={security}
            alt="Echipamente de securitate"
            width={700}
            height={600}
            className="rounded-xl shadow-md object-cover w-full h-auto transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
