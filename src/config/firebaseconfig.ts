// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpeRKKURrK_qhQPBATqUoYysSbbof_rhE",
  authDomain: "productupload-d0095.firebaseapp.com",
  databaseURL: "https://productupload-d0095-default-rtdb.firebaseio.com",
  projectId: "productupload-d0095",
  storageBucket: "productupload-d0095.appspot.com",
  messagingSenderId: "747905970752",
  appId: "1:747905970752:web:6c7fbc966b161cd6c025a5",
  measurementId: "G-R357JVNSBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app