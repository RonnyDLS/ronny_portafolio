import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Esto reemplaza __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/environments/environment.prod.ts');

// Asegurarte que la carpeta existe
const envDir = path.dirname(targetPath);
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

const content = `
export const environment = {
  production: true,
  firebase: {
    apiKey: '${process.env.FIREBASE_APIKEY}',
    authDomain: '${process.env.FIREBASE_AUTHDOMAIN}',
    databaseURL: '${process.env.FIREBASE_DATABASEURL}',
    projectId: '${process.env.FIREBASE_PROJECTID}',
    storageBucket: '${process.env.FIREBASE_STORAGEBUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGINGSENDERID}',
    appId: '${process.env.FIREBASE_APPID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENTID}',
  }
};
`;

fs.writeFileSync(targetPath, content, { encoding: 'utf8' });
console.log('✅ environment.prod.ts generado correctamente.');
