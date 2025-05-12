import Services from "./Services";
import ServicesDetails from "./ServicesDetails";


export default function ServicesPage({ onSelectServices, services, isSelected, onCloseService }) {
    return (
        <section className="bg-gray-100 py-24 px-6 ">
            <div className="max-w-7xl mx-auto relative">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 border-b-2 inline-block pb-2">
                    Serviciile Noastre
                </h2>
                <div className="flex mb-10">
                    {isSelected && (
                        <ServicesDetails
                            selectedService={services.find((s) => s.id === isSelected)}
                            onCloseService={onCloseService}
                        />
                    )}

                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {services.map((service, index) => (
                        <Services
                            key={index}
                            id={service.id}
                            src={service.SourceImage}
                            title={service.title}
                            services={services}
                            onSelectServices={onSelectServices}
                            isSelected={isSelected}
                        />
                    ))}

                </ul>
            </div>
        </section>
    );
}
