// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5Kibszv7-s8e4yXyYqDO7EmRCYjogMGs",
    authDomain: "practice-project-dcf6c.firebaseapp.com",
    projectId: "practice-project-dcf6c",
    storageBucket: "practice-project-dcf6c.firebasestorage.app",
    messagingSenderId: "582390750986",
    appId: "1:582390750986:web:d228cfb7596c73d136a4f3",
    measurementId: "G-E02ZVTKTK4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app)
