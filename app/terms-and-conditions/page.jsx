import TermsAndConditionsClient from '@/components/TermsAndConditionsClient';

export const metadata = {
  title: 'Terms & Conditions | PKD Studio',
  description: 'Read the terms and conditions for using the PKD Studio website and submitting contact inquiries.',
  alternates: {
    canonical: 'https://pkdstudio.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | PKD Studio',
    description: 'Read the terms and conditions for using the PKD Studio website and submitting contact inquiries.',
    url: 'https://pkdstudio.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
