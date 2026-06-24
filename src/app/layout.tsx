import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gokul Kannan | Designing the Invisible",
    template: "%s | Gokul Kannan"
  },
  description: "Gokul Kannan is a Digital Experience Builder who explores, designs, and builds digital experiences that people remember.",
  keywords: ["Gokul Kannan", "Digital Experience Builder", "Portfolio", "Frontend Developer", "Designer", "UX/UI"],
  authors: [{ name: "Gokul Kannan" }],
  creator: "Gokul Kannan",
  metadataBase: new URL("https://gokulkannan.com"), // Update with actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gokulkannan.com",
    title: "Gokul Kannan | Designing the Invisible",
    description: "I explore, design, and build digital experiences that people remember.",
    siteName: "Gokul Kannan Portfolio",
    images: [{
      url: "/og-image.jpg", // Create this image later or place placeholder
      width: 1200,
      height: 630,
      alt: "Gokul Kannan - Digital Experience Builder"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul Kannan | Designing the Invisible",
    description: "I explore, design, and build digital experiences that people remember.",
    creator: "@iamgokulkannan", // Replace if necessary
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://gokulkannan.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gokul Kannan",
    "jobTitle": "Digital Experience Builder",
    "url": "https://gokulkannan.com",
    "sameAs": [
      "https://www.linkedin.com/in/iamgokulkannan/",
      "https://github.com/iamgokulkannan",
      "https://www.instagram.com/iamgokulkannan"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-pure-black text-pure-white selection:bg-warm-metallic selection:text-pure-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
