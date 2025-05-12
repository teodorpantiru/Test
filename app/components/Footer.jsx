export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Logo & Name */}
                <div>
                    <h2 className="text-2xl font-bold tracking-wider uppercase mb-2">Cremil T.S.P.I</h2>
                    <p className="text-sm text-gray-400">Instalare și Mentenanță Sisteme de Securitate</p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="uppercase text-sm font-semibold text-gray-300 mb-2">Navigare</h3>
                    <a href="#acasa" className="text-gray-400 hover:text-white transition">Acasă</a>
                    <a href="#despre" className="text-gray-400 hover:text-white transition">Despre</a>
                    <a href="#servicii" className="text-gray-400 hover:text-white transition">Servicii</a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                </div>

                {/* Contact Info */}
                <div className="text-gray-400">
                    <h3 className="uppercase text-sm font-semibold mb-2">Contact</h3>
                    <p className="mb-1">Dobric, Romania<br />Str. Principală nr. 95</p>
                    <p className="mb-1">📞 +40-753 541 498</p>
                    <p className="">✉️ <a href="mailto:creta_gabriel@hotmail.it" className="hover:text-white">creta_gabriel@hotmail.it</a></p>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Cremil T.S.P.I. Toate drepturile rezervate.
            </div>
        </footer>


    )
}