import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { gridProjects } from '@/components/projectdata';
import ProjectDetailClient from '@/components/ProjectDetailClient';

export async function generateStaticParams() {
  return gridProjects
    .filter(p => p.category.toLowerCase() !== 'coming soon')
    .map(p => ({
      slug: p.slug,
    }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = gridProjects.find(p => p.slug === slug);
  if (!project || project.category.toLowerCase() === 'coming soon') {
    notFound();
  }

  const projectDir = path.join(process.cwd(), 'public', 'projects', project.folder);
  let images = [];

  try {
    if (fs.existsSync(projectDir)) {
      const files = fs.readdirSync(projectDir);
      images = files
        .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
        .map(file => `/projects/${project.folder}/${file}`);

      // Sort files numerically if they start with a number (e.g. 1.webp, 2.webp, 10.webp, 100.webp)
      images.sort((a, b) => {
        const nameA = path.basename(a, path.extname(a));
        const nameB = path.basename(b, path.extname(b));

        const numA = parseInt(nameA, 10);
        const numB = parseInt(nameB, 10);

        const hasNumA = !isNaN(numA);
        const hasNumB = !isNaN(numB);

        if (hasNumA && hasNumB) {
          return numA - numB;
        } else if (hasNumA) {
          return -1;
        } else if (hasNumB) {
          return 1;
        }
        return nameA.localeCompare(nameB);
      });
    }
  } catch (error) {
    console.error('Error reading project directory:', error);
  }

  if (images.length === 0) {
    images = [project.img];
  }

  return <ProjectDetailClient project={project} images={images} />;
}
