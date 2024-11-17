import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();
auth.languageCode = 'fr';

// Configuration des emails de vérification et de connexion
const domain = window.location.origin;
export const actionCodeSettings = {
  url: `${domain}/dashboard`,
  handleCodeInApp: true,
  dynamicLinkDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.split('.')[0]
};

// Configuration des emails de vérification
export const verificationSettings = {
  url: `${domain}/dashboard/verification`,
  handleCodeInApp: true,
  dynamicLinkDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.split('.')[0]
};

const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };