"use client";
import Image from "next/image";
import camereVideo from "../../public/assets/cabluri.jpg";
import { motion } from "framer-motion";

export default function AboutUs({ aboutRef }) {
  return (
    <section className="relative isolate bg-gradient-to-br from-sky-100 via-white to-gray-100 overflow-hidden px-4 py-14 md:px-10 md:py-22 lg:px-12 lg:py-38">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('/grid.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full text-center lg:text-left"
          >
            <h2
              ref={aboutRef}
              className="scroll-mt-28 text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-400 inline-block pb-2"
            >
              Despre noi
            </h2>
            <p className="text-gray-700 md:text-xl text-base sm:text-lg leading-relaxed  lg:text-left">
              Dacă aveți nevoie de o soluție completă pentru siguranța locuinței
              sau afacerii dumneavoastră , echipa{" "}
              <span className="font-semibold">Cremil T.S.P.I</span> vă oferă
              servicii profesionale de
              <strong> instalare sisteme de securitate</strong>,{" "}
              <strong>camere video</strong>,<strong> detecție incendiu</strong>{" "}
              și <strong>automatizări</strong>. Cu o vastă experiență în
              domeniu, vă garantăm lucrări personalizate, realizate la cele mai
              înalte standarde.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex w-full h-full ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full text-center lg:text-left"
          >
            <Image
              src={camereVideo}
              alt="Echipamente de securitate"
              width={700}
              height={600}
              className="rounded-xl shadow-md object-cover w-full h-auto transition duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
