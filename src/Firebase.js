
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEqdtBNPFMkmDPI_Q7tNYfeHm8RfjPUis",
  authDomain: "portfolio-9cd67.firebaseapp.com",
  projectId: "portfolio-9cd67",
  storageBucket: "portfolio-9cd67.firebasestorage.app",
  messagingSenderId: "704235547061",
  appId: "1:704235547061:web:14061466fb71da5e0d51fc",
  measurementId: "G-9GXP4MDV7R"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
// const analytics = getAnalytics(app);      // Use the initialized app

export default app;  
