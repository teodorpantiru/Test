export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-4 py-4 md:px-10 md:py-4 lg:px-4 lg:py-4">
      <div className="flex flex-col md:flex-row justify-between align-center items-center max-w-7xl mx-auto  gap-10 text-center">
        {/* Logo & Name */}
        <div>
          <h2 className="text-2xl font-bold tracking-wider uppercase mb-2">
            Cremil T.S.P.I
          </h2>
          <p className="text-sm text-gray-400">
            Instalare și Mentenanță Sisteme de Securitate
          </p>
        </div>

        {/* Navigation Links */}
        {/* <div className="flex flex-col space-y-2">
                    <h3 className="uppercase text-sm font-semibold text-gray-300 mb-2">Navigare</h3>
                    <a href="#acasa" className="text-gray-400 hover:text-white transition">Acasă</a>
                    <a href="#despre" className="text-gray-400 hover:text-white transition">Despre</a>
                    <a href="#servicii" className="text-gray-400 hover:text-white transition">Servicii</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                </div> */}

        {/* Contact Info */}
        <div className="text-gray-400">
          <h3 className="uppercase text-sm font-semibold mb-2">Contact</h3>
          <p className="mb-1">
            Dobric, Romania
            <br />
            Str. Principală nr. 95
          </p>
          <p className="mb-1">📞 +40-753 541 498</p>
          <p className="">
            ✉️{" "}
            <a
              href="mailto:creta_gabriel@hotmail.it"
              className="hover:text-white"
            >
              creta_gabriel@hotmail.it
            </a>
          </p>
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
