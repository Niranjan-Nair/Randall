import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGDMRm_dhNtC-PfpautF13-audDtaoadw",
    authDomain: "cooking-app-99649.firebaseapp.com",
    projectId: "cooking-app-99649",
    storageBucket: "cooking-app-99649.firebasestorage.app",
    messagingSenderId: "736932998014",
    appId: "1:736932998014:web:038a3439858fc3faca212f",
    measurementId: "G-PZVDY091YH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
