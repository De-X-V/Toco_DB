//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYXsyYYu3vd0QK7yeEgYxuk7zB4KAnJ6U",
  authDomain: "fir-react-638b3.firebaseapp.com",
  projectId: "fir-react-638b3",
  storageBucket: "fir-react-638b3.appspot.com",
  messagingSenderId: "904943003694",
  appId: "1:904943003694:web:73e26c9360c994d16657bf",
  measurementId: "G-8FK79L5SZM",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
