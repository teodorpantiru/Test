import Image from "next/image";
import security from "../../public/assets/security.webp";

export default function AboutUs() {
    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-400 inline-block pb-2">
                        Despre noi
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Dacă sunteți în căutarea unei soluții profesioniste pentru securitatea locuinței sau a afacerii dumneavoastră,
                        echipa <span className="font-semibold">Cremil T.S.P.I</span> vă stă la dispoziție. Cu o vastă experiență în domeniul securității,
                        vă garantăm servicii de cea mai înaltă calitate, personalizate nevoilor dumneavoastră specifice.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full h-full">
                    <Image
                        src={security}
                        alt="Echipamente de securitate"
                        width={700}
                        height={600}
                        className="rounded-xl shadow-md object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
