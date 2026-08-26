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
    .filter(p => p.category.toLowerCase() !== 'project underway')
    .map(p => ({
      slug: p.slug,
    }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = gridProjects.find(p => p.slug === slug);
  if (!project || project.category.toLowerCase() === 'project underway') {
    notFound();
  }

  const images = resolveProjectImages(project.folder, project.img);

  return <ProjectDetailClient project={project} images={images} />;
}
