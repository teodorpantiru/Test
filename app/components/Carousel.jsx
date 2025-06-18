"use client";

import dynamic from "next/dynamic";
import { data } from "../data/carouselData";
import { settings } from "../data/sliderData";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importăm Slider doar pe client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Galerie() {
  return (
    <div className="bg-neutral-50">
      <div className="align-center items-center max-w-7xl mx-auto text-center  py-15 sm:py-25 md:py-15 lg:py-15 sm:my-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Lucrări recente
        </h2>
        <p className="text-gray-700 md:text-xl  text-lg max-w-xl mx-auto">
          🔧 Descoperă cele mai recente proiecte realizate de echipa noastră –
          intervenții rapide, soluții moderne și rezultate durabile pentru
          clienți mulțumiți.
        </p>
        <div className="bg-neutral-50 relative mx-auto mt-7">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="px-4">
                {" "}
                {/* 👈 adds spacing between slides */}
                <div className="flex flex-col mb-10 h-[280px] text-black bg-gray-200 rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={d.img}
                    alt="serviciu"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Galerie;
