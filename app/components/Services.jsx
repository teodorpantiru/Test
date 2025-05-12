'use client'
import Image from "next/image";
import ServicesDetails from "./ServicesDetails";



export default function Services({ id, src, title, onSelectServices, services }) {
    return (
        <li onClick={() => onSelectServices(id)} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transition duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-gray-50" >
            <Image
                src={src}
                alt={title}
                width={200}
                height={200}
                className="rounded-full object-cover mb-4 w-48 h-48 transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-700">
                {title}
                {services.id}
            </h3>

        </li >
    );
}
