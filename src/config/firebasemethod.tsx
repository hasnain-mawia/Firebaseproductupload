import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import app from './firebaseconfig';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, getFirestore } from "firebase/firestore"; 


const auth = getAuth(app)
const db = getFirestore(app)

export const signupUser = (email:any, password:any, navigate:any)=> {
  createUserWithEmailAndPassword(auth,email, password).then((res)=>{
    toast.success(`Account Created succesfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    navigate('/login')
  }).catch((err)=>{
    toast.error(`Email Already exist`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  })
}
export const loginUser = (email:any, password:any, navigate:any)=> {
  signInWithEmailAndPassword(auth,email, password).then((res)=>{
    toast.success(`${email} Login succesfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    navigate('/')
  }).catch((err)=>{
    toast.error(`${email} ${err}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  })
}
export const forgotPassword = (email:any)=> {
  sendPasswordResetEmail(auth,email).then((res)=>{
    toast.success(`Login link send to your ${email} `, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      });
  }).catch((err)=>{
    console.log(err, "Error")
  })
}
export const sendData = (nodename:string, obj:string) =>{
  const dc:any = collection(db,"Products")
  return addDoc(dc, obj)}