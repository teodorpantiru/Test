import Image from "next/image";
import logo from "../../public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-4 py-8 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
        {/* Logo & Name */}
        <div className="content-center justify-center">
          <Image
            className="mb-4"
            src={logo}
            width={70}
            height={70}
            alt="Cremil logo"
          />
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-2">
            Cremil T.S.P.I
          </h2>
          <p className="text-sm text-gray-400">
            Instalare și Mentenanță Sisteme de Securitate
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <h3 className="uppercase text-sm font-semibold text-gray-300 mb-2">
            Navigare
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#acasa"
                className="text-gray-400 hover:text-white transition"
              >
                Acasă
              </a>
            </li>
            <li>
              <a
                href="#despre"
                className="text-gray-400 hover:text-white transition"
              >
                Despre
              </a>
            </li>
            <li>
              <a
                href="#servicii"
                className="text-gray-400 hover:text-white transition"
              >
                Servicii
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="uppercase text-sm font-semibold text-gray-300 mb-2">
            Contact
          </h3>
          <ul className="text-gray-400 space-y-2">
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
                className="hover:text-white"
              >
                office@cremil-tspi.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Cremil T.S.P.I. Toate drepturile
        rezervate.
      </div>
    </footer>
  );
}
