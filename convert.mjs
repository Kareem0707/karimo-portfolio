import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './public/images';

async function convertImages() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Converted ${file} to WebP`);
        fs.unlinkSync(inputPath); // Delete old file
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err);
      }
    }
  }
}

convertImages();
