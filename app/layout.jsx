import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "@fontsource/poppins"; // Defaults to 400
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import Script from "next/script";

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
    "Instalare Aer Condiționat Cluj & Florești | Sisteme de Securitate Cremil T.S.P.I",

  description:
    "Instalare aer condiționat Cluj și Florești rapid și profesionist. Oferim și montaj sisteme de supraveghere video, detectoare fum ISU, alarme, automatizări porți și bariere auto. Soluții complete pentru siguranță și confort.",
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
          content="
  instalare aer condiționat Cluj,
  montaj aer condiționat Florești,
  aer condiționat Cluj,
  firmă aer condiționat Cluj,
  instalare AC Cluj Florești,
  sisteme securitate Cluj,
  detectoare fum ISU,
  supraveghere video exterior Cluj,
  automatizare porți auto Cluj
"
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="PsB8jAGwE7q-XF4gQvnrvPtwztM2BTDeGX2Tmr61CyA"
        />
        <title>{metadata.title}</title>
        <link rel="icon" href="/assets/logodark.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logodark.png"
        />
        <link rel="apple-touch-icon" href="/assets/logodark.png" />

        {/*For Indexing Structured Data (Schema.org)  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Cremil T.S.P.I",
                description: metadata.description,
                url: "https://www.cremil-tspi.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.cremil-tspi.com/assets/logodark.png",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cluj-Napoca",
                  addressRegion: "Cluj",
                  addressCountry: "RO",
                },
                telephone: "+40753541498",
                openingHours: "Mo-Fr 09:00-17:00",
                areaServed: "Cluj, Florești, România",
                sameAs: [
                  "https://www.facebook.com/cremiltspi",
                  "https://www.instagram.com/cremiltspi",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://www.cremil-tspi.com",
                name: "Cremil T.S.P.I",
                publisher: {
                  "@type": "Organization",
                  name: "Cremil T.S.P.I",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.cremil-tspi.com/assets/logodark.png",
                  },
                },
              },
            ]),
          }}
        />

        {/* <!-- Google tag / Analitics (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2QD5P346XY"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2QD5P346XY');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
