import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


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

const firestore = getFirestore(app);
const collectionRef = collection(firestore, 'new-club-members')

const contestRef = collection(firestore, 'contest-participants')

export { addDoc, collectionRef, contestRef }