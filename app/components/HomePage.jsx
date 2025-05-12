import Image from "next/image";
import homepage from "../../public/assets/homepage.webp";

export default function HomePage() {
  return (
    <section className="bg-slate-900 py-30 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src={homepage}
            alt="homepage"
            width={300}
            height={300}
            className="rounded-full object-contain w-[420px] h-[420px] bg-white p-4 shadow-xl transition duration-300 hover:scale-105"
          />


        </div>

        {/* Text Section */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6">CREMIL T.S.P.I</h1>
          <p className="text-lg leading-relaxed mb-8">
            Dacă sunteți în căutarea unui instalator de sisteme de securitate de încredere,
            <span className="font-semibold"> Cremil T.S.P.I </span> este alegerea perfectă pentru dumneavoastră. Cu o echipă dedicată și
            competentă, oferim servicii de instalare și mentenanță la cele mai înalte standarde. Indiferent dacă aveți
            nevoie de un sistem de monitorizare video, control al accesului sau detecție incendii, puteți conta pe
            expertiza noastră. Contactați-ne astăzi pentru un mediu sigur și protejat!
          </p>
          <button className="bg-white text-slate-900 font-semibold px-6 py-2 rounded hover:bg-gray-200  transition duration-300 transform hover:-translate-y-2 hover:shadow-xl ">
            Citește mai mult
          </button>
        </div>
      </div>
    </section>
  );
}
