import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBflJ1A_NCnKcmEWf1z7xkU2LGA0-QcYk",
  authDomain: "confident-mix-251723.firebaseapp.com",
  projectId: "confident-mix-251723",
  storageBucket: "confident-mix-251723.appspot.com",
  messagingSenderId: "605275117249",
  appId: "1:605275117249:web:2d0e61506b3e02d9376640",
  measurementId: "G-SEBBPHLHNL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);