import servicesData from "../../data/servicesData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const serviciu = servicesData.find((s) => s.slug === slug);
  if (!serviciu) return {};

  return {
    title: `${serviciu.title} | Cremil T.S.P.I.`,
    description:
      serviciu.content.find((block) => block.type === "paragraph")?.text.slice(0, 160) ||
      "Serviciu profesional oferit de Cremil T.S.P.I. în Cluj și Florești."
  };
}

export default function ServicePage({ params }) {
  const serviciu = servicesData.find((s) => s.slug === params.slug);
  if (!serviciu) return notFound();

  return (
    <main className="bg-gradient-to-b from-white via-blue-50 to-blue-100 min-h-screen px-2 py-1">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-3xl shadow-xl p-3 sm:p-12 border border-blue-100">

        {/* 🔙 Back Button */}
        <div className="mb-6">
          <Link
            href="/#services-section"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold"
          >
            <span className="mr-2 text-lg">←</span> Înapoi la servicii
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-blue-900 mb-4 leading-snug tracking-tight text-start">
          {serviciu.title}
        </h1>

        {/* Divider */}
        <div className="h-1 w-24 bg-blue-400 rounded-full mb-6"></div>

        {/* Content */}
        <div className="space-y-6 text-[1.1rem] leading-relaxed text-gray-700">
          {serviciu.content.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p key={i} className="relative pl-4 border-l-4 border-blue-300">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc list-inside space-y-2 text-blue-800 font-medium">
                  {block.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>
    </main>
  );
}
