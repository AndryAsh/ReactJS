import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Конфиг преподавателя
/* const firebaseConfig = {
    apiKey: "AIzaSyA6tEGB5TILBR80hFlS8F0jvA97cGDal1k",
    authDomain: "gb-chat8.firebaseapp.com",
    databaseURL:
        "https://gb-chat8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-chat8",
    storageBucket: "gb-chat8.appspot.com",
    messagingSenderId: "761986474352",
    appId: "1:761986474352:web:da1b127da2cfec1ba52fb5",
    measurementId: "G-GC2N6MR9MX",
}; */

const firebaseConfig = {
    apiKey: "AIzaSyAVaYPgEk0rVY_5zLrqh4CtOyPXoO4aJwA",
    authDomain: "gb-chat-andash.firebaseapp.com",
    databaseURL: "https://gb-chat-andash-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-chat-andash",
    storageBucket: "gb-chat-andash.appspot.com",
    messagingSenderId: "449562274512",
    appId: "1:449562274512:web:2da1d04d5e5ec7770eccd5",
    measurementId: "G-EVYG3ZPF3L"
};

export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
