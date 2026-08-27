const fs = require('fs');
const path = require('path');

const gridProjects = [
  { folder: "GRAND CHATEAU", title: "GRAND CHÂTEAU", img: "/projects/GRAND CHATEAU/1.webp" },
  { folder: "RENAISSANCE 86", title: "RENAISSANCE 86", img: "/projects/RENAISSANCE 86/1.webp" },
  { folder: "LITHIC HOME", title: "LITHIC HOME", img: "/projects/LITHIC HOME/1.webp" },
  { folder: "THE CANVAS HOME", title: "THE CANVAS HOME", img: "/projects/THE CANVAS HOME/1.webp" },
  { folder: "17 ALTAMOUNT", title: "17 ALTAMOUNT", img: "/projects/17 ALTAMOUNT/1.webp" },
  { folder: "JADE", title: "JADE", img: "/projects/JADE/1.webp" },
  { folder: "VAAYU", title: "VAAYU", img: "/projects/VAAYU/1.webp" },
  { folder: "CHETAN SHAH", title: "SAVANNAH", img: "/projects/CHETAN SHAH/1.webp" },
  { folder: "BINOY SHAH", title: "THE GRAND HORIZON", img: "/projects/BINOY SHAH/1.webp" },
  { folder: "ANIL BAJAJ", title: "THE VERTICAL HOME", img: "/projects/ANIL BAJAJ/1.webp" },
  { folder: "NIRAJ OFFICE", title: "Oculus", img: "/projects/NIRAJ OFFICE/1.webp" },
  { folder: "ALLOY", title: "ALLOY WORKSPACES", img: "/projects/ALLOY/1.webp" },
  { folder: "NOUVEAU HOME", title: "NOUVEAU HOME", img: "/projects/NOUVEAU HOME/1.webp" },
  { folder: "ASIT THAKKAR", title: "THE LUMA HOME", img: "/projects/ASIT THAKKAR/1.webp" },
  { folder: "NIVARAAH", title: "NIVARAAH", img: "" },
  { folder: "KAZEHOME", title: "KAZE HOME", img: "" },
  { folder: "TROPICAL TAN", title: "TROPICAL TAN", img: "" },
  { folder: "PUSHKAR", title: "THE RESORT", img: "" },
  { folder: "DP HOME", title: "DP HOME", img: "" },
  { folder: "INARAH", title: "INARAH", img: "" },
  { folder: "SILK ROUTE", title: "SILK ROUTE", img: "" },
  { folder: "ROYAL CREST", title: "ROYAL CREST", img: "" }
];

const projectToAug26Map = {
  '17 ALTAMOUNT': '17 ALTAMOUNT',
  'ALLOY': 'ALLOY WORKSPACES',
  'ANIL BAJAJ': 'THE VERTICAL HOME - ANIL BAJAJ',
  'ASIT THAKKAR': 'ASIT THAKKAR',
  'BINOY SHAH': 'THE GRAND HORIZON - BINOY SHAH',
  'CHETAN SHAH': 'CHETAN SHAH',
  'DHAVAL SHAH GHATKOPAR': 'DHAVAL SHAH - GHATKOPAR',
  'JADE': 'JADE - UNADKAT',
  'JIMIT SHAH': 'JIMIT SHAH',
  'LITHIC HOME': 'LITHIC HOME - VIRAL SHAH',
  'GRAND CHATEAU': 'GRAND CHATEAU - NIRAJ HOUSE',
  'NIRAJ OFFICE': 'OCULUS - NIRAJ OFFICE',
  'NOUVEAU HOME': 'NOUVEAU HOME - JAGRUT GANDHI',
  'PKD OFFICE': 'PKD OFFICE',
  'RENAISSANCE 86': 'RENAISSANCE 86',
  'THE CANVAS HOME': 'THE CANVAS HOME - DARSHANA DOSHI',
  'NIKET RANE': 'NIKET RANE'
};

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

function getCategoryRank(str) {
  if (!str) return 7;
  const norm = str.toUpperCase();

  // 1. Entrance
  if (norm.includes('ENTRANCE') || norm.includes('LOBBY') || norm.includes('FOYER') || norm.includes('PASSAGE') || norm.includes('RECEPTION') || norm.includes('WAITING AREA') || norm.includes('OPEN AREA')) {
    return 1;
  }

  // 9. Balcony / Outdoor
  if (norm.includes('BALCONY') || norm.includes('DECK') || norm.includes('EXTERIOR') || norm.includes('TERRACE') || norm.includes('SIT OUT')) {
    return 9;
  }

  // 6. Master bedroom and bathrooms
  if (norm.includes('MASTER') || norm.includes('WALK IN WARDROBE') || norm.includes('WIW')) {
    return 6;
  }

  // 8. Last kids bedroom and bathrooms
  if (norm.includes('KID') || norm.includes('DAUGHTER') || norm.includes('SON') || norm.includes('SMEET') || norm.includes('SOHAM')) {
    return 8;
  }

  // 2. Living
  if (norm.includes('LIVING') || norm.includes('OPEN COLLABORATIVE') || norm.includes('FAMILY LOUNGE') || norm.includes('LOUNGE') || norm.includes('SOFA') || norm.includes('STAIRCASE')) {
    return 2;
  }

  // 3. Dining
  if (norm.includes('DINING')) {
    return 3;
  }

  // 4. Powder bathroom
  if (norm.includes('POWDER') || norm.includes('WASHROOM') || (norm.includes('BATHROOM') && !norm.includes('GUEST') && !norm.includes('PARENT') && !norm.includes('MOTHER') && !norm.includes('FATHER') && !norm.includes('GRANDMOTHER')) || (norm.includes('TOILET') && !norm.includes('MASTER') && !norm.includes('GUEST') && !norm.includes('PARENT') && !norm.includes('MOTHER') && !norm.includes('DAUGHTER') && !norm.includes('SON'))) {
    return 4;
  }

  // 5. Kitchen
  if (norm.includes('KITCHEN') || norm.includes('PANTRY')) {
    return 5;
  }

  // 7. Other bedroom and bathrooms
  if (norm.includes('GUEST') || norm.includes('PARENT') || norm.includes('GRANDMOTHER') || norm.includes('MOTHER') || norm.includes('FATHER') || norm.includes('BEDROOM') || norm.includes('BATHROOM') || norm.includes('TOILET') || norm.includes('MANDIR') || norm.includes('BAR') || norm.includes('ART') || norm.includes('CABIN') || norm.includes('CONFERENCE') || norm.includes('MEETING') || norm.includes('WORKING') || norm.includes('PODCAST') || norm.includes('PHONE') || norm.includes('LIBRARY') || norm.includes('ALF DAFRE') || norm.includes('CAFETERIA') || norm.includes('GYM') || norm.includes('MULTIPURPOSE')) {
    return 7;
  }

  return 7;
}

function getEntryRank(relativeDir, fileName) {
  const parts = relativeDir ? relativeDir.split(path.sep) : [];
  for (let i = parts.length - 1; i >= 0; i--) {
    const r = getCategoryRank(parts[i]);
    if (r !== 7) return r;
  }
  const fileRank = getCategoryRank(fileName);
  if (fileRank !== 7) return fileRank;
  if (parts.length > 0) return getCategoryRank(parts[0]);
  return 7;
}

function resolveProjectImages(folder, defaultCoverImg) {
  let images = [];
  const aug26FolderName = projectToAug26Map[folder];

  if (aug26FolderName) {
    const aug26SubDir = ['projects-aug26', 'projects_aug26'].find(dir =>
      fs.existsSync(path.join(process.cwd(), 'public', dir, aug26FolderName))
    );

    if (aug26SubDir) {
      const aug26DirPath = path.join(process.cwd(), 'public', aug26SubDir, aug26FolderName);
      const entries = [];

      function collectAug26(dirPath, relativeDir) {
        const items = fs.readdirSync(dirPath);
        items.forEach(item => {
          const fullPath = path.join(dirPath, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            collectAug26(fullPath, path.join(relativeDir, item));
          } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
            const rank = getEntryRank(relativeDir, item);
            const relativeWebSegments = relativeDir ? relativeDir.split(path.sep) : [];
            const webPath = [`/${aug26SubDir}`, aug26FolderName, ...relativeWebSegments, item]
              .map(seg => encodeURIComponent(seg))
              .join('/')
              .replace(/%2F/g, '/');

            entries.push({ webPath, file: item, relativeDir, rank });
          }
        });
      }

      collectAug26(aug26DirPath, '');

      entries.sort((a, b) => {
        if (a.rank !== b.rank) return a.rank - b.rank;
        const dirCompare = a.relativeDir.localeCompare(b.relativeDir);
        if (dirCompare !== 0) return dirCompare;
        const nameA = path.basename(a.file, path.extname(a.file));
        const nameB = path.basename(b.file, path.extname(b.file));
        const numA = parseInt(nameA, 10);
        const numB = parseInt(nameB, 10);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return nameA.localeCompare(nameB);
      });

      entries.forEach(e => images.push(e.webPath));
      if (images.length > 0) return images;
    }
  }

  const updFolderName = projectToUpdatedMap[folder];
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
            const rank = getEntryRank(relativeDir, item);
            const relativeWebSegments = relativeDir ? relativeDir.split(path.sep) : [];
            const webPath = ['/projects_updated', updFolderName, ...relativeWebSegments, item]
              .map(seg => encodeURIComponent(seg))
              .join('/')
              .replace(/%2F/g, '/');

            updatedEntries.push({ webPath, file: item, relativeDir, rank });
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
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return nameA.localeCompare(nameB);
      });

      updatedEntries.forEach(e => images.push(e.webPath));
      if (images.length > 0) return images;
    }
  }

  const projectDir = path.join(process.cwd(), 'public', 'projects', folder);
  if (fs.existsSync(projectDir)) {
    const entries = [];
    function collectProjects(dirPath, relativeDir) {
      const items = fs.readdirSync(dirPath);
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          collectProjects(fullPath, path.join(relativeDir, item));
        } else if (/\.(webp|jpg|jpeg|png)$/i.test(item)) {
          const webPath = `/projects/${folder}/${relativeDir ? relativeDir + '/' : ''}${item}`;
          if (webPath !== defaultCoverImg && item !== '1.webp') {
            const rank = getEntryRank(relativeDir, item);
            entries.push({ webPath, file: item, relativeDir, rank });
          }
        }
      });
    }

    collectProjects(projectDir, '');

    entries.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      const dirCompare = a.relativeDir.localeCompare(b.relativeDir);
      if (dirCompare !== 0) return dirCompare;
      const nameA = path.basename(a.file, path.extname(a.file));
      const nameB = path.basename(b.file, path.extname(b.file));
      const numA = parseInt(nameA, 10);
      const numB = parseInt(nameB, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return nameA.localeCompare(nameB);
    });

    entries.forEach(e => images.push(e.webPath));
  }

  return images.length > 0 ? images : (defaultCoverImg ? [defaultCoverImg] : []);
}

const manifest = {};
gridProjects.forEach(p => {
  manifest[p.folder] = resolveProjectImages(p.folder, p.img);
});

const libDir = path.join(process.cwd(), 'lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}

const outputPath = path.join(libDir, 'projectImagesManifest.json');
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
console.log('Project images manifest generated successfully at:', outputPath);
