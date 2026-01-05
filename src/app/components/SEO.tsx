// src/app/components/SEO.tsx
import React from "react";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string; 
  ogImage?: string; 
  robots?: string; 
};

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  robots = "index, follow",
}: SEOProps) {
  const fullTitle = title ? `${title} | Rain Drops Villa` : "Rain Drops Villa";
  const image = ogImage ?? "https://raindrops.lk/og-image.jpg";

  return (
    <>
      <title>{fullTitle}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots} />

      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Rain Drops Villa" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Rain Drops Villa — Sinharaja wellness villa" />
      <meta property="og:url" content={canonical ?? "https://raindrops.lk"} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </>
  );
}
