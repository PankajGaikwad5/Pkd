import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: 'Architecture & Interior Design Projects Portfolio | PKD Studio',
  description: 'Explore PKD Studio\'s luxury residential developments, adaptive reuse residences, commercial showrooms, and architectural design portfolio in Mumbai and across India.',
  alternates: {
    canonical: 'https://pkdstudio.in/projects',
  },
  openGraph: {
    title: 'Architecture & Interior Design Projects Portfolio | PKD Studio',
    description: 'Explore PKD Studio\'s luxury residential developments, adaptive reuse residences, commercial showrooms, and architectural design portfolio.',
    url: 'https://pkdstudio.in/projects',
    images: ['/projects/GRAND CHATEAU/1.webp'],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

