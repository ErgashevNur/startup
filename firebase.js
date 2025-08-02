import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9E2LBkWziDD-kAJrJiJAPKFzTsHFE8w8",
  authDomain: "mozen-589c7.firebaseapp.com",
  projectId: "mozen-589c7",
  storageBucket: "mozen-589c7.firebasestorage.app",
  messagingSenderId: "730920482312",
  appId: "1:730920482312:web:f6bcc79b0101f56b6a03bd",
  measurementId: "G-J982D023HZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };