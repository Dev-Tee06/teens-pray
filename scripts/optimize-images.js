import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    let converted = 0;

    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const inputPath = path.join(assetsDir, file);
        const outputPath = path.join(assetsDir, `${path.parse(file).name}.webp`);

        // Check if webp already exists
        if (!fs.existsSync(outputPath)) {
          console.log(`Optimizing ${file}...`);
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          console.log(`Saved as ${path.parse(file).name}.webp`);
          
          // Delete original to save space
          fs.unlinkSync(inputPath);
          converted++;
        }
      }
    }
    console.log(`Successfully converted ${converted} images to WebP.`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
