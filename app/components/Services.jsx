"use client";
import Image from "next/image";

export default function Services({
  id,
  src,
  title,
  onSelectServices,
  isSelected,
}) {
  return (
    <div
      onClick={() => onSelectServices(id)}
      className={`w-full h-full cursor-pointer bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50 ${
        isSelected === id ? "border border-sky-500" : ""
      }`}
    >
      <Image
        src={src}
        alt={title}
        width={96}
        height={96}
        className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 shrink-0"
      />
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-sky-700 transition-colors duration-300 leading-snug break-words">
          {title}
        </h3>
      </div>
    </div>
  );
}
