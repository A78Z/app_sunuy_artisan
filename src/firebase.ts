import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUQGKVXdNv3aZ61hrmobUoIaS-EzxnP1k",
  authDomain: "homeworkpmn.firebaseapp.com",
  projectId: "homeworkpmn",
  storageBucket: "homeworkpmn.firebasestorage.app",
  messagingSenderId: "585869268105",
  appId: "1:585869268105:web:233463347d5a0380916258"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);