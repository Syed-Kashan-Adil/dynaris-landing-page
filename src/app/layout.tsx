import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dynaris AI - Enterprise AI Workforces | Revolutionary AI Technology",
  description: "Architect multiple workflows and stable deployment instances which perform work 24/7. Deploy specialized AI agents in unified coordination to automate operations and deliver measurable business outcomes.",
  keywords: [
    "AI workforce",
    "enterprise AI",
    "automation",
    "artificial intelligence",
    "business automation",
    "AI agents",
    "digital workforce",
    "machine learning",
    "workflow automation",
    "business intelligence"
  ],
  authors: [{ name: "Dynaris AI" }],
  creator: "Dynaris AI",
  publisher: "Dynaris AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dynaris.ai'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/vite.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/web-app-manifest-192x192.png',
  openGraph: {
    title: "Dynaris AI - Enterprise AI Workforces",
    description: "Revolutionary AI technology for enterprise workforces. Deploy specialized AI agents to automate operations and deliver measurable business outcomes.",
    url: 'https://dynaris.ai',
    siteName: 'Dynaris AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dynaris AI - Enterprise AI Workforces',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dynaris AI - Enterprise AI Workforces",
    description: "Revolutionary AI technology for enterprise workforces. Deploy specialized AI agents to automate operations.",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/web-app-manifest-192x192.png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ backgroundColor: 'white', color: '#171717' }}
      >
        {children}
      </body>
    </html>
  );
}
