"use client";

export default function ServicesDetails({ selectedService, onCloseService }) {
  if (!selectedService || !selectedService.content) return null;

  return (
    <div className="text-gray-800 space-y-6 leading-relaxed text-base">
      <div className="flex items-left justify-end">
        <button
          onClick={onCloseService}
          className="flex text-md text-gray-600 hover:underline items-center align-center justify-center text-center"
        >
          ✖
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-5">{selectedService.title}</h2>
      </div>

      {selectedService.content.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc list-inside space-y-1">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "question") {
          return (
            <p key={index} className="font-semibold ">
              {block.text}
            </p>
          );
        }

        return null;
      })}
    </div>
  );
}
