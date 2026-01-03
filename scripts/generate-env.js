import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 👉 SOLO usar dotenv en local
if (!process.env.GITHUB_ACTIONS) {
  const dotenv = await import("dotenv");
  dotenv.config();
}

// Esto reemplaza __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(
  __dirname,
  "../src/environments/environment.prod.ts"
);

// Asegurar carpeta
const envDir = path.dirname(targetPath);
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

// 🔐 Validación (IMPORTANTE)
const required = [
  "FIREBASE_APIKEY",
  "FIREBASE_AUTHDOMAIN",
  "FIREBASE_DATABASEURL",
  "FIREBASE_PROJECTID",
  "FIREBASE_STORAGEBUCKET",
  "FIREBASE_MESSAGINGSENDERID",
  "FIREBASE_APPID",
  "FIREBASE_MEASUREMENTID",
];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing env var: ${key}`);
  }
});

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

fs.writeFileSync(targetPath, content, { encoding: "utf8" });
console.log("✅ environment.prod.ts generated");

const targetPath2 = path.join(__dirname, "../src/environments/environment.ts");
fs.writeFileSync(targetPath2, content, { encoding: "utf8" });
console.log("✅ environment.ts generated");
