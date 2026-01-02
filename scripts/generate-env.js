import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config()

const targetPath = './src/environments/environment.prod.ts';

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
