"use client";

import dynamic from "next/dynamic";
import { data } from "../data/carouselData";
import { settings } from "../data/sliderData";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Galerie() {
  return (
    <div className="bg-neutral-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center py-16 sm:py-24">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Lucrări recente
        </h2>
        <p className="text-gray-700 md:text-xl text-lg max-w-xl mx-auto">
          🔧 Descoperă cele mai recente proiecte realizate de echipa noastră –
          intervenții rapide, soluții moderne și rezultate durabile pentru
          clienți mulțumiți.
        </p>

        <div className="mt-10 w-full">
          <Slider
            {...settings}
            className="[&_.slick-dots]:flex [&_.slick-dots]:justify-center [&_.slick-dots]:mt-6"
          >
            {data.map((d) => (
              <div key={d.name} className="px-2 sm:px-3">
                <div className="flex flex-col h-[280px] text-black bg-gray-200 rounded-xl shadow-lg overflow-hidden">
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
