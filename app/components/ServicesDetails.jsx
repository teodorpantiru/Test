export default function ServicesDetails({ selectedService, onCloseService }) {
    if (!selectedService) return null;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <button onClick={onCloseService} className="text-slate-950 text-2xl float-right">&times;</button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedService.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{selectedService.Description}</p>
        </div>
    );
}
