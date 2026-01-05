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
    <html lang="en">
      {/* ← Remove the manual <head> completely */}
      
      {/* Correct way: Put JSON-LD using next/script (outside any <head>) */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"   // ← This is safe and recommended
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
              "telephone": "+94-77-123-4567",   // ← Put your real phone
              "contactType": "Customer Service",
              "email": "info@raindrops.lk"
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
        
        {children}
        
        <Script
          src="/assets/js/smoothscroll.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}