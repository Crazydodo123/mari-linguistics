import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCa0pczGBURhEt8Fkuf1UMdyG3zHg12wYc",
  authDomain: "mari-linguistics.firebaseapp.com",
  projectId: "mari-linguistics",
  storageBucket: "mari-linguistics.appspot.com",
  messagingSenderId: "219880487769",
  appId: "1:219880487769:web:7d14a54f0ca9294757ea48",
  measurementId: "G-MJC5ETSETX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);