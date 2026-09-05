import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: 'Contact Us | PKD Studio - Luxury Interior Design Studio Mumbai',
  description: 'Get in touch with PKD Studio in Lower Parel, Mumbai for luxury residential, commercial, and architectural interior design inquiries.',
  alternates: {
    canonical: 'https://pkdstudio.in/contact',
  },
  openGraph: {
    title: 'Contact Us | PKD Studio - Luxury Interior Design Studio Mumbai',
    description: 'Get in touch with PKD Studio in Lower Parel, Mumbai for luxury residential, commercial, and architectural interior design inquiries.',
    url: 'https://pkdstudio.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
