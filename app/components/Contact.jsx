export default function Contact() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Title & Info */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contactați-ne</h2>
                    <p className="text-gray-600">
                        Locație: Dobric, Romania - Str. Principală nr. 95 <br />
                        Telefon: <a href="tel:+40753541498" className="text-blue-600 font-semibold">+40-753 541 498</a> <br />
                        Email: <a href="mailto:creta_gabriel@hotmail.it" className="text-blue-600 font-semibold">creta_gabriel@hotmail.it</a>
                    </p>
                </div>

                {/* Form + Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-xl rounded-2xl">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nume</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Alex Popescu"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="alexpopescu@example.com"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    placeholder="+40 712 345 678"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                            >
                                Trimite
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.808020000379!2d23.58967631561469!3d46.77121037913826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1d27f2eb37%3A0xefa2e6e9aa5df2ae!2sCluj-Napoca!5e0!3m2!1sen!2sro!4v1684580100000!5m2!1sen!2sro"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>


    )
}