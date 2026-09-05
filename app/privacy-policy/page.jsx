import PrivacyPolicyClient from '@/components/PrivacyPolicyClient';

export const metadata = {
  title: 'Privacy Policy | PKD Studio',
  description: 'Learn how PKD Studio protects and handles your personal data when using our services and contact forms.',
  alternates: {
    canonical: 'https://pkdstudio.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | PKD Studio',
    description: 'Learn how PKD Studio protects and handles your personal data when using our services and contact forms.',
    url: 'https://pkdstudio.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
