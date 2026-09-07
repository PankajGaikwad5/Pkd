import localFont from 'next/font/local';
import { LenisProvider } from '@/components/LenisProvider';
import './globals.css';

const glacialIndifference = localFont({
  src: [
    {
      path: '../public/fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

export const metadata = {
  metadataBase: new URL('https://pkdstudio.in'),
  title: {
    default: 'PKD Studio | Luxury Interior Design & Architecture Studio in Mumbai',
    template: '%s | PKD Studio',
  },
  description: 'PKD Studio is a luxury interior design and architecture studio based in Mumbai, led by Founder & Principal Designer Prachiti Khanvilkar. Specializing in high-end residential, commercial, and adaptive reuse projects.',
  keywords: [
    'PKD Studio',
    'Prachiti Khanvilkar',
    'Interior Designer Mumbai',
    'Luxury Interior Design India',
    'Architecture Studio Mumbai',
    'Lower Parel Interior Designer',
    'Bespoke Residential Interior Design',
    'Commercial Interior Design',
    'Grand Chateau Mumbai',
    'Renaissance 86',
  ],
  authors: [{ name: 'Prachiti Khanvilkar', url: 'https://pkdstudio.in/about-us' }],
  creator: 'PKD Studio',
  publisher: 'PKD Studio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://pkdstudio.in',
  },
  openGraph: {
    title: 'PKD Studio | Luxury Interior Design & Architecture Studio in Mumbai',
    description: 'Bespoke luxury interior design, architecture, and spatial craftsmanship led by Prachiti Khanvilkar in Mumbai, India.',
    url: 'https://pkdstudio.in',
    siteName: 'PKD Studio',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/landinghero.webp',
        width: 1200,
        height: 630,
        alt: 'PKD Studio Luxury Interior Design & Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PKD Studio | Luxury Interior Design & Architecture Studio in Mumbai',
    description: 'Bespoke luxury interior design, architecture, and spatial craftsmanship led by Prachiti Khanvilkar.',
    images: ['/landinghero.webp'],
  },
  verification: {
    google: 'suG1dF6A8rz6m50eHzkRm21n6uBqZSZPE8NcSGc9isc',
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
  icons: {
    icon: '/logowhite.png',
    shortcut: '/logowhite.png',
    apple: '/logowhite.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['InteriorDesigner', 'ArchitecturalFirm', 'LocalBusiness'],
  '@id': 'https://pkdstudio.in/#organization',
  name: 'PKD Studio',
  legalName: 'PKD Studio',
  url: 'https://pkdstudio.in',
  logo: 'https://pkdstudio.in/logo.png',
  image: 'https://pkdstudio.in/landinghero.webp',
  description: 'PKD Studio is a luxury interior design and architecture practice based in Lower Parel, Mumbai. Led by Principal Designer Prachiti Khanvilkar with over 27 years of experience, specializing in bespoke residential, commercial, and hospitality design across India.',
  founder: {
    '@type': 'Person',
    name: 'Prachiti Khanvilkar',
    jobTitle: 'Founder & Principal Designer',
    sameAs: 'http://www.linkedin.com/in/prachiti-khanvilkar-412874114',
  },
  foundingDate: '2017',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '317, Vasan Udyog Bhavan, Senapati Bapat Marg, opp. Palladium Mall, Lower Parel West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400013',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.9935234,
    longitude: 72.8256521,
  },
  email: 'enquires@teampkd.in',
  sameAs: [
    'https://www.instagram.com/pkdstudio_/',
    'http://www.linkedin.com/in/prachiti-khanvilkar-412874114',
  ],
  priceRange: '$$$$',
  areaServed: ['Mumbai', 'Maharashtra', 'India', 'International'],
  knowsAbout: [
    'Interior Design',
    'Architecture',
    'Luxury Residential Design',
    'Commercial Interiors',
    'Adaptive Reuse Architecture',
    'Furniture Design',
    'Spatial Craftsmanship',
  ],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${glacialIndifference.variable}`}>
      <head>
        <meta name="google-site-verification" content="suG1dF6A8rz6m50eHzkRm21n6uBqZSZPE8NcSGc9isc" />
        <link rel="icon" href="/logowhite.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logowhite.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#D6CBBC] text-[#332820] antialiased overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

