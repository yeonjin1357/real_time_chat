// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, serverTimestamp } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBshhkfIbVHWMQnp9O2-GHnzjc5GmU1G_Q",
  authDomain: "realtimechat-cbd7c.firebaseapp.com",
  databaseURL: "https://realtimechat-cbd7c-default-rtdb.firebaseio.com",
  projectId: "realtimechat-cbd7c",
  storageBucket: "realtimechat-cbd7c.appspot.com",
  messagingSenderId: "72961990118",
  appId: "1:72961990118:web:3d71a66fcbfc4f7c620a27",
  measurementId: "G-J86JR38K0E",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, ref, onValue, serverTimestamp, functions };
