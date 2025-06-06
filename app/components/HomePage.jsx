import Image from "next/image";
import homepage from "../../public/assets/sisteme-securitate.webp";

export default function HomePage() {
  return (
    <section className="bg-slate-900 px-4 py-18 md:px-10 md:py-22 lg:px-12 lg:py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center mb-4 lg:mb-0">
          <Image
            src={homepage}
            alt="homepage"
            width={300}
            height={300}
            className="rounded-full object-contain w-[340px] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] bg-white p-4 shadow-xl transition duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="text-white px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            CREMIL T.S.P.I
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-center lg:text-left">
            Căutați un{" "}
            <strong>
              instalator de sisteme de securitate în Cluj sau Florești
            </strong>
            ?<span className="font-semibold"> Cremil T.S.P.I </span> vă oferă
            soluții complete pentru locuințe și afaceri, adaptate nevoilor
            dumneavoastră. Oferim servicii profesionale de{" "}
            <strong>instalare, mentenanță și configurare</strong> pentru
            <strong>
              {" "}
              camere de supraveghere video, sisteme de control acces și detecție
              incendiu
            </strong>
            . Ne diferențiem prin promptitudine, seriozitate și rezultate
            durabile.
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="bg-white text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              -- Citește mai mult --
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
