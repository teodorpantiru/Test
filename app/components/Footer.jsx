import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f1f5f9] text-gray-800 px-4 py-8 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
        {/* Logo & Name */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/logodark.png"
            width={60}
            height={60}
            alt="Cremil logo"
          />
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-2">
            Cremil T.S.P.I
          </h2>
          <p className="text-sm text-gray-800">
            Instalare și Mentenanță Sisteme de Securitate
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <h3 className="uppercase text-sm font-semibold text-gray-800 mb-2">
            Navigare
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#acasa"
                className="text-gray-800 hover:text-gray-500 transition"
              >
                Acasă
              </a>
            </li>
            <li>
              <a
                href="#despre"
                className="text-gray-800 hover:text-gray-500 transition"
              >
                Despre
              </a>
            </li>
            <li>
              <a
                href="#servicii"
                className="text-gray-800 hover:text-gray-500 transition"
              >
                Servicii
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-gray-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase text-sm font-semibold text-gray-800 mb-2">
            Contact
          </h3>
          <ul className="text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Localitate:</span> Florești, Cluj,
              Romania,
            </li>
            <li>
              <span className="font-semibold">Strada:</span> Eroilor, nr. 380,
            </li>
            <li>
              <span className="font-semibold">Telefon:</span> 📞 +40-753 541 498
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:creta_gabriel@hotmail.it"
                className="hover:text-gray-500"
              >
                office@cremil-tspi.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-800">
        &copy; {new Date().getFullYear()} Cremil T.S.P.I. Toate drepturile
        rezervate.
      </div>
    </footer>
  );
}
