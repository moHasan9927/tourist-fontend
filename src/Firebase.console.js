import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzUJWE6hXKVTStFnUP039BofY2IPVxc-U",
  authDomain: "tourist-spots-4984d.firebaseapp.com",
  projectId: "tourist-spots-4984d",
  storageBucket: "tourist-spots-4984d.firebasestorage.app",
  messagingSenderId: "36101767403",
  appId: "1:36101767403:web:6d6fa4217d14a4ae6e7eae",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
