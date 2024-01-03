// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAK9y5jo_vJXZbqyp3h01FSCroGXkOFQ0g',
  authDomain: 'taskey-541c8.firebaseapp.com',
  projectId: 'taskey-541c8',
  storageBucket: 'taskey-541c8.appspot.com',
  messagingSenderId: '227728716918',
  appId: '1:227728716918:web:a90bb980aececd19209b57',
  measurementId: 'G-PRS7ZE5EVE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// initializ database connection

const db = getFirestore(app);

const storage = getStorage(app);

export {auth, db, storage};
