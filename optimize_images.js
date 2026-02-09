import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public', 'images');
const SERVICES_DIR = path.join(PUBLIC_DIR, 'services');

async function optimizeFile(filePath, maxWidth = 1920, quality = 80) {
    try {
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            return;
        }

        const statsBefore = fs.statSync(filePath);
        console.log(`Processing ${path.basename(filePath)} (${(statsBefore.size / 1024).toFixed(0)} KB)...`);

        const image = await Jimp.read(filePath);
        let resized = false;

        if (image.bitmap.width > maxWidth) {
            image.resize(maxWidth, Jimp.AUTO);
            resized = true;
        }

        await image.quality(quality).writeAsync(filePath);

        const statsAfter = fs.statSync(filePath);
        console.log(`  -> Optimized: ${(statsAfter.size / 1024).toFixed(0)} KB ${resized ? '(Resized)' : ''}`);

    } catch (err) {
        console.error(`  Error optimizing ${path.basename(filePath)}:`, err.message);
    }
}

async function run() {
    console.log('Starting Image Optimization...');

    // 1. Optimize Hero Image (CRITICAL) - 10MB -> ~200KB
    await optimizeFile(path.join(PUBLIC_DIR, 'hero-final.jpg'), 1920, 75);

    // 2. Optimize Portrait
    await optimizeFile(path.join(PUBLIC_DIR, 'dr-chumbe-portrait.jpg'), 800, 80);

    // 3. Optimize Services (Batch)
    if (fs.existsSync(SERVICES_DIR)) {
        const files = fs.readdirSync(SERVICES_DIR);
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                await optimizeFile(path.join(SERVICES_DIR, file), 1200, 80);
            }
        }
    }

    console.log('Optimization Complete!');
}

run();
