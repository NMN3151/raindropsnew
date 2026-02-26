import type { Metadata } from "next";
import "../../assets/css/plugins/bootstrap.min.css";
import "../../assets/css/plugins/cookit.min.css";
import "../../assets/css/plugins/gdpr-cookie.css";
import "../../assets/css/plugins/jaralux.min.css";
import "../../assets/css/plugins/jquery-ui.min.css";
import "../../assets/css/plugins/magnific-popup.css";
import "../../assets/css/plugins/meanmenu.css";
import "../../assets/css/plugins/nice-select.css";
import "../../assets/css/plugins.min.css";
import "../../assets/fonts/flaticon_bokinn.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "../../assets/css/style.css";
import "react-datepicker/dist/react-datepicker.css";
import 'aos/dist/aos.css';
import Script from 'next/script';
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cinzel',
});

export const metadata: Metadata = {
  title: "Rain Drops Villa - Luxury Stay Villa Experience Comfort & Elegance",
  description: "Nestled in the heart of Sinharaja Forest, our villa offers a serene escape in a cool climate. Experience ultimate comfort in our well-appointed rooms.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", sizes: "192x192", url: "/android-chrome-192x192.png" },
    { rel: "icon", sizes: "512x512", url: "/android-chrome-512x512.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cinzel.variable}>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Rain Drops Villa",
            "alternateName": "Raindrops",
            "url": "https://raindrops.lk",
            "logo": "https://raindrops.lk/logo.png",
            "description": "Nestled in the heart of Sinharaja Forest, our villa offers a serene escape in a cool climate. Experience ultimate comfort in our well-appointed rooms.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sinharaja Forest",
              "addressRegion": "Southern Province",
              "addressCountry": "LK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+94-77-123-4567",
              "contactType": "Customer Service",
              "email": "booking@intterminal.com"
            },
            "sameAs": [
              "https://web.facebook.com/profile.php?id=61583529392042#",
              "https://www.instagram.com/raindrops.villa"
            ]
          })
        }}
      />

      <Script
        id="ga4"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQSZCD56');
          `,
        }}
      />

      <body>

        {/* Global banner typography overrides */}
        <style>{`
          .banner__slide__content h1 {
  color: #ffffff;
  font-size: clamp(32px, 5vw, 72px);
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: var(--font-cinzel);
  font-weight: 400;
}

         

          .banner__slide__content .sub-heading2 {
            color: #ffffff;
            font-size: 20px;
            opacity: 0.75;
            font-family: 'Lato', sans-serif;
            font-weight: regular;
          }

          .heading-holder {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
            .mobile-reserve-btn{
            margin-top: 20px;
            }

          @media (max-width: 768px) {
            .banner__slide__content h1 {
              font-size: clamp(26px, 7vw, 40px);
            }
            .banner__slide__content .sub-heading1 {
              font-size: clamp(20px, 3.5vw, 20px);
            }
            .banner__slide__content .sub-heading2 {
              font-size: clamp(12px, 3vw, 14px);
            }
          }
        `}</style>

        {children}

        <Script
          src="/assets/js/smoothscroll.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}