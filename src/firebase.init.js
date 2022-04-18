// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrc2CNYDb5FfDrs9JCfNdNc2uIn8L8jWg",
  authDomain: "test-react-app-b375f.firebaseapp.com",
  projectId: "test-react-app-b375f",
  storageBucket: "test-react-app-b375f.appspot.com",
  messagingSenderId: "160819444581",
  appId: "1:160819444581:web:804a6dc052f264493fbf8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;