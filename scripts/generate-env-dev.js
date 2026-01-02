import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config()

const targetPath = './src/environments/environment.ts';

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
console.log('✅ environment.prod.ts generado correctamente.');
