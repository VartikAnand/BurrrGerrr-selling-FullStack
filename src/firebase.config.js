import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBQmE3ggQglda53HHLC5Mh25_DPAADrME",
  authDomain: "burrgerr-14109.firebaseapp.com",
  databaseURL: "https://burrgerr-14109-default-rtdb.firebaseio.com",
  projectId: "burrgerr-14109",
  storageBucket: "burrgerr-14109.appspot.com",
  messagingSenderId: "395646513141",
  appId: "1:395646513141:web:f07bc1da6c48bc6074babc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
