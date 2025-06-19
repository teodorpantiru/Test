import Image from "next/image";
import homepage from "../../public/assets/camere-supraveghere.jpg";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="bg-slate-900 px-4 pb-14 pt-10 sm:px-6 md:px-12 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center  lg:gap-5">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full text-center lg:text-left"
        >
          <div className="w-full text-center lg:text-left">
            <h1 className="my-5 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
              <span className="block">
                Sisteme de securitate pentru
                <span className="text-yellow-400"> locuințe</span>
              </span>
              <span className="block text-yellow-400"> și afaceri.</span>
            </h1>

            <div className="flex justify-center lg:justify-start border-b my-5"></div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 lg:mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Cremil T.S.P.I instalează sisteme inteligente de supraveghere,
              alarme, control acces și detecție incendiu în Cluj, Florești și
              alte zone din România, rapid, profesionist și personalizat.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Image
              src={homepage}
              alt="Sistem de securitate"
              width={450}
              height={450}
              className="rounded-full border-2 border-gray-800 object-cover w-[350px] h-[350px] sm:w-[320px] sm:h-[320px]  lg:w-[480px] lg:h-[480px] shadow-2xl transition duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
