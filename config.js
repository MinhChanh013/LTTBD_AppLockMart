import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyBViXlub3x9xugBUOrg4fzmv_CWXuRWcbw",
  authDomain: "vegetableapp-93081.firebaseapp.com",
  projectId: "vegetableapp-93081",
  storageBucket: "vegetableapp-93081.appspot.com",
  messagingSenderId: "1077502318439",
  appId: "1:1077502318439:web:2840aae83ffc5d084781c2",
  measurementId: "G-SBE9GE468L"
}

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};