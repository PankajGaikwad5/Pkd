import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { gridProjects } from '@/components/projectdata';
import ProjectDetailClient from '@/components/ProjectDetailClient';

const projectToUpdatedMap = {
  '17 ALTAMOUNT': '17 ALTAMOUNT',
  'ALLOY': 'ALLOY WORKSPACES',
  'ANIL BAJAJ': 'ANIL BAJAJ - THE VERTICAL HOME',
  'ASIT THAKKAR': 'ASIT THAKKAR',
  'BINOY SHAH': 'BINOY SHAH',
  'CHETAN SHAH': 'CHETAN SHAH',
  'DHAVAL SHAH GHATKOPAR': 'DHAVAL SHAH - GHATKOPAR',
  'JADE': 'JADE',
  'JIMIT SHAH': 'JIMIT SHAH',
  'LITHIC HOME': 'LITHIC HOME',
  'GRAND CHATEAU': 'NIRAJ HOUSE',
  'NIRAJ OFFICE': 'NIRAJ OFFICE',
  'NOUVEAU HOME': 'NOUVEAU HOME',
  'PKD OFFICE': 'PKD OFFICE',
  'RENAISSANCE 86': 'RENAISSANCE 86',
  'THE CANVAS HOME': 'THE CANVAS HOME',
  'NIKET RANE': 'NIKET RANE'
};

function getCategoryRank(folderName) {
  const norm = folderName.toUpperCase();
  
  // 1. Entrance
  if (norm.includes('ENTRANCE') || norm.includes('LOBBY') || norm.includes('FOYER') || norm.includes('PASSAGE') || norm.includes('RECEPTION') || norm.includes('WAITING AREA') || norm.includes('OPEN AREA')) {
    return 1;
  }
  // 2. Living
  if (norm.includes('LIVING') || norm.includes('OPEN COLLABORATIVE') || norm.includes('FAMILY LOUNGE') || norm.includes('LOUNGE') || norm.includes('SOFA') || norm.includes('STAIRCASE')) {
    if (norm.includes('MASTER LOUNGE')) return 6;
    if (norm.includes('TERRACE LOUNGE')) return 9;
    return 2;
  }
  // 3. Dining
  if (norm.includes('DINING')) {
    return 3;
  }
  // 4. Powder bathroom
  if (norm.includes('POWDER') || norm.includes('WASHROOM') || (norm.includes('BATHROOM') && !norm.includes('BEDROOM') && !norm.includes('MASTER') && !norm.includes('GUEST') && !norm.includes('KID') && !norm.includes('DAUGHTER') && !norm.includes('SON') && !norm.includes('PARENT') && !norm.includes('MOTHER') && !norm.includes('GRANDMOTHER') && !norm.includes('SMEET') && !norm.includes('SOHAM') && !norm.includes('BATHROOM 1') && !norm.includes('BATHROOM 2') && !norm.includes('BATHROOM 3'))) {
    return 4;
  }
  // 5. Kitchen
  if (norm.includes('KITCHEN') || norm.includes('PANTRY')) {
    return 5;
  }
  // 6. Master bedroom and bathrooms
  if (norm.includes('MASTER') || norm.includes('WALK IN WARDROBE')) {
    return 6;
  }
  // 8. Last kids bedroom and bathrooms
  if (norm.includes('KID') || norm.includes('DAUGHTER') || norm.includes('SON') || norm.includes('SMEET') || norm.includes('SOHAM')) {
    return 8;
  }
  // 7. Other bedroom and bathrooms
  if (norm.includes('GUEST') || norm.includes('PARENT') || norm.includes('GRANDMOTHER') || norm.includes('MOTHER') || norm.includes('BEDROOM') || norm.includes('BATHROOM') || norm.includes('MANDIR') || norm.includes('BAR') || norm.includes('ART') || norm.includes('CABIN') || norm.includes('CONFERENCE') || norm.includes('MEETING') || norm.includes('WORKING') || norm.includes('PODCAST') || norm.includes('PHONE') || norm.includes('LIBRARY') || norm.includes('ALF DAFRE') || norm.includes('CAFETERIA') || norm.includes('GYM') || norm.includes('MULTIPURPOSE')) {
    return 7;
  }
  // 9. Balcony
  if (norm.includes('BALCONY') || norm.includes('DECK') || norm.includes('EXTERIOR') || norm.includes('TERRACE')) {
    return 9;
  }

  return 7;
}

function resolveProjectImages(folder, defaultCoverImg) {
  const updFolderName = projectToUpdatedMap[folder];
  let images = [];

  if (updFolderName) {
    const updDirPath = path.join(process.cwd(), 'public', 'projects_updated', updFolderName);
    if (fs.existsSync(updDirPath)) {
      const updatedEntries = [];

      function collect(dirPath, relativeDir) {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const fullPath = path.join(dirPath, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            collect(fullPath, path.join(relativeDir, item));
          } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
            const parts = relativeDir.split(path.sep);
            let rank = 7;
            for (let i = parts.length - 1; i >= 0; i--) {
              const r = getCategoryRank(parts[i]);
              if (r !== 7 || i === 0) {
                rank = r;
                break;
              }
            }

            const relativeWebSegments = relativeDir ? relativeDir.split(path.sep) : [];
            const webPath = ['/projects_updated', updFolderName, ...relativeWebSegments, item]
              .map(seg => encodeURIComponent(seg))
              .join('/')
              .replace(/%2F/g, '/');

            updatedEntries.push({
              webPath,
              file: item,
              relativeDir,
              rank
            });
          }
        });
      }

      collect(updDirPath, '');

      updatedEntries.sort((a, b) => {
        if (a.rank !== b.rank) return a.rank - b.rank;
        const dirCompare = a.relativeDir.localeCompare(b.relativeDir);
        if (dirCompare !== 0) return dirCompare;

        const nameA = path.basename(a.file, path.extname(a.file));
        const nameB = path.basename(b.file, path.extname(b.file));
        const numA = parseInt(nameA, 10);
        const numB = parseInt(nameB, 10);
        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }
        return nameA.localeCompare(nameB);
      });

      updatedEntries.forEach(e => {
        images.push(e.webPath);
      });

      return images;
    }
  }

  // Fallback to original public/projects/${folder} directory
  const projectDir = path.join(process.cwd(), 'public', 'projects', folder);
  if (fs.existsSync(projectDir)) {
    const files = fs.readdirSync(projectDir);
    images = files
      .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
      .map(file => `/projects/${folder}/${file}`)
      .filter(img => img !== defaultCoverImg && img !== `/projects/${folder}/1.webp`);

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

  return images.length > 0 ? images : (defaultCoverImg ? [defaultCoverImg] : []);
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
