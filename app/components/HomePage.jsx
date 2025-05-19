import Image from "next/image";
import homepage from "../../public/assets/homepage.webp";

export default function HomePage() {
  return (
    <section className="bg-slate-900 px-4 py-14 sm:px-6 sm:py-24">
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
            Dacă sunteți în căutarea unui instalator de sisteme de securitate de
            încredere,
            <span className="font-semibold"> Cremil T.S.P.I </span> este
            alegerea perfectă pentru dumneavoastră. Cu o echipă dedicată și
            competentă, oferim servicii de instalare și mentenanță la cele mai
            înalte standarde. Indiferent dacă aveți nevoie de un sistem de
            monitorizare video, control al accesului sau detecție incendii,
            puteți conta pe expertiza noastră. Contactați-ne astăzi pentru un
            mediu sigur și protejat!
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="bg-white text-slate-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Citește mai mult
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
