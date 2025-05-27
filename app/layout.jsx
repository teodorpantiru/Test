import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "@fontsource/poppins"; // Defaults to 400
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Cremil T.S.P.I - Sisteme de Securitate, Automatizări, Instalări, Mentenanță, Incendiu și Supraveghere în Cluj",
  description:
    "Cremil T.S.P.I oferă soluții complete de securitate: sisteme de supraveghere video, control acces, detecție incendiu, efracție și case inteligente. Servicii profesionale de proiectare, instalare și mentenanță.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="sisteme securitate Cluj, sistem supraveghere, instalare, automatizare, securitate, supraveghere video, mentenanta , proiectare,  camere video, detectoare fum, ISU, mentenanță, automatizare porți, Cluj, Florești"
        />
        <meta name="robots" content="index, follow" />
        <title>{metadata.title}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo.png"
        />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Electrician", "SecurityService"],
              name: "Cremil T.S.P.I",
              description: metadata.description,
              url: "https://www.cremil-tspi.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cluj-Napoca",
                addressRegion: "Cluj",
                addressCountry: "RO",
              },
              telephone: "+40753541498",
              openingHours: "Mo-Fr 09:00-17:00",
              areaServed: "Cluj, Florești, România",
            }),
          }}
        />

        {/* Google Analytics – înlocuiește ID-ul dacă e diferit */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4BBWR6PH15"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4BBWR6PH15');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
