import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlQkTBa5TjRa-F91fdDPIogIyYwtwEndc",
    authDomain: "swanspa-d0897.firebaseapp.com",
    projectId: "swanspa-d0897",
    storageBucket: "swanspa-d0897.appspot.com",
    messagingSenderId: "1070045666447",
    appId: "1:1070045666447:web:819f71359634bde7d6a4fa",
    measurementId: "G-V11BLYPR00"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };