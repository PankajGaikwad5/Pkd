import { notFound } from 'next/navigation';
import { gridProjects } from '@/components/projectdata';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import projectImagesManifest from '@/lib/projectImagesManifest.json';

function resolveProjectImages(folder, defaultCoverImg) {
  const images = projectImagesManifest[folder];
  if (images && images.length > 0) {
    return images;
  }
  return defaultCoverImg ? [defaultCoverImg] : [];
}

export async function generateStaticParams() {
  return gridProjects
    .filter(p => p.slug && p.category?.toLowerCase() !== 'project underway')
    .map(p => ({
      slug: p.slug,
    }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = gridProjects.find(p => p.slug === slug);

  if (!project || project.category?.toLowerCase() === 'project underway') {
    return {
      title: 'Project Not Found | PKD Studio',
    };
  }

  const projName = project.projectName || project.title;
  const projType = project.projectType || 'Luxury Architecture & Interior Design';
  const projLoc = project.loc || 'Mumbai';
  const title = `${projName} | ${projType} in ${projLoc}`;
  
  const paragraphs = Array.isArray(project.description) ? project.description : [project.description || ''];
  const fullText = paragraphs.join(' ');
  const description = fullText.length > 160 ? `${fullText.slice(0, 157)}...` : fullText;
  const canonical = `https://pkdstudio.in/projects/${slug}`;
  const imageUrl = project.img ? (project.img.startsWith('http') ? project.img : `https://pkdstudio.in${project.img}`) : 'https://pkdstudio.in/landinghero.webp';

  return {
    title,
    description,
    keywords: [
      projName,
      `${projName} ${projLoc}`,
      projType,
      'PKD Studio',
      'Prachiti Khanvilkar',
      'Luxury Interior Designer Mumbai',
      'Architecture Studio Mumbai',
      'Bespoke Spatial Design',
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${projName} - ${projType} | PKD Studio`,
      description,
      url: canonical,
      siteName: 'PKD Studio',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${projName} by PKD Studio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${projName} - ${projType} | PKD Studio`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = gridProjects.find(p => p.slug === slug);
  if (!project || project.category?.toLowerCase() === 'project underway') {
    notFound();
  }

  const images = resolveProjectImages(project.folder, project.img);
  const projName = project.projectName || project.title;
  const paragraphs = Array.isArray(project.description) ? project.description : [project.description || ''];
  const fullText = paragraphs.join(' ');

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: projName,
    headline: `${projName} - ${project.projectType || 'Luxury Interior Design'}`,
    description: fullText,
    url: `https://pkdstudio.in/projects/${slug}`,
    image: project.img ? (project.img.startsWith('http') ? project.img : `https://pkdstudio.in${project.img}`) : 'https://pkdstudio.in/landinghero.webp',
    dateCreated: project.year || '2024',
    author: {
      '@type': 'Organization',
      name: 'PKD Studio',
      url: 'https://pkdstudio.in',
    },
    creator: {
      '@type': 'Person',
      name: 'Prachiti Khanvilkar',
      jobTitle: 'Founder & Principal Designer',
    },
    locationCreated: {
      '@type': 'Place',
      name: project.loc || 'Mumbai, India',
    },
    genre: project.projectType || 'Interior Design & Architecture',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailClient project={project} images={images} />
    </>
  );
}
