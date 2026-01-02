import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Esto reemplaza __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/environments/environment.ts');

// Asegurarte que la carpeta existe
const envDir = path.dirname(targetPath);
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

const content = `
export const environment = {
  production: false,
  firebase: {
    apiKey: '${process.env.FIREBASE_APIKEY_DEV}',
    authDomain: '${process.env.FIREBASE_AUTHDOMAIN_DEV}',
    projectId: '${process.env.FIREBASE_PROJECTID_DEV}',
    storageBucket: '${process.env.FIREBASE_STORAGEBUCKET_DEV}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGINGSENDERID_DEV}',
    appId: '${process.env.FIREBASE_APPID_DEV}',
  }
};
`;

fs.writeFileSync(targetPath, content, { encoding: 'utf8' });
console.log('✅ environment.ts generado correctamente.');
