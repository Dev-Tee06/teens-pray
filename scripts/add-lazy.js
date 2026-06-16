import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace <img ...> with <img loading="lazy" ...> if it doesn't already have it
      content = content.replace(/<img\b(?![^>]*\bloading=["']lazy["'])/g, '<img loading="lazy"');
      fs.writeFileSync(fullPath, content);
    }
  }
}

traverse(srcDir);
console.log('Lazy loading added successfully.');
