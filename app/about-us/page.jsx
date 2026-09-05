import AboutClient from "@/components/AboutClient";

export const metadata = {
  title: 'About Us | Founder Prachiti Khanvilkar & PKD Studio',
  description: 'Discover PKD Studio, led by Founder & Principal Designer Prachiti Khanvilkar with 27+ years of experience in luxury interior design and spatial architecture in Mumbai.',
  alternates: {
    canonical: 'https://pkdstudio.in/about-us',
  },
  openGraph: {
    title: 'About Us | Founder Prachiti Khanvilkar & PKD Studio',
    description: 'Discover PKD Studio, led by Founder & Principal Designer Prachiti Khanvilkar with 27+ years of experience in luxury interior design.',
    url: 'https://pkdstudio.in/about-us',
    images: ['/principledesigner.webp'],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

