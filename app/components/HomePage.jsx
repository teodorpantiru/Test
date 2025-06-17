import Image from "next/image";
import homepage from "../../public/assets/sisteme-securitate.jpg";

export default function HomePage() {
  return (
    <section className="bg-slate-900 px-4 py-8 sm:px-6 md:px-12 lg:px-8 lg:py-14">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-1 lg:gap-5">
        {/* Text Section */}
        <div className="w-full text-center lg:text-left mt-5">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-snug sm:leading-tight mb-6 text-white">
            <span className="text-yellow-400 block lg:mb-4 ">
              Protejăm ceea ce contează.
            </span>
            <p className=" lg:mb-5">
              {" "}
              Soluții de securitate pentru locuințe și afaceri.
            </p>
          </h1>
          <div className="flex justify-center lg:justify-start border-b mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 lg:mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
            Cremil T.S.P.I instalează sisteme inteligente de supraveghere,
            alarme, control acces și detecție incendiu în Cluj, Florești și în
            toată România. Rapid, profesionist și personalizat.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <Image
            src={homepage}
            alt="Sistem de securitate"
            width={450}
            height={450}
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]  lg:w-[480px] lg:h-[480px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

// "use client";

// import dynamic from "next/dynamic";
// const RotatingGlobe = dynamic(() => import("./RotatingGlobe"), { ssr: false });

// export default function HomePage() {
//   return (
//     <section className="bg-slate-900 px-6 py-28 lg:py-36 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight sm:leading-tight mb-6">
//             <span className="block text-yellow-400 mb-2">
//               Protejăm ceea ce contează.
//             </span>
//             Soluții inteligente pentru securitatea ta.
//           </h1>

//           <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
//             Cu experiență și promptitudine, Cremil T.S.P.I oferă instalare și
//             mentenanță pentru sisteme de supraveghere video, alarme, control
//             acces și detecție incendiu în Cluj, Florești și în întreaga țară.
//           </p>

//           <div className="flex justify-center lg:justify-start">
//             <a
//               href="#servicii"
//               className="bg-yellow-400 text-slate-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl"
//             >
//               Află mai multe
//             </a>
//           </div>
//         </div>

//         {/* Globe 3D Section */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <div className="relative">
//             <div className="absolute inset-0 blur-2xl opacity-20 rounded-full bg-yellow-400 w-full h-full scale-105"></div>
//             <div className="relative z-10">
//               {/* <RotatingGlobe /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
