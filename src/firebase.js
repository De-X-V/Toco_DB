//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEDmRsUe4SKUoQQSvVXXPXhWbZ3yDW3t0",
  authDomain: "carrot-dd2ec.firebaseapp.com",
  projectId: "carrot-dd2ec",
  storageBucket: "carrot-dd2ec.appspot.com",
  messagingSenderId: "545733515786",
  appId: "1:545733515786:web:05218afd710e15dd881df3",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();
const serverStamp = firebase.firestore.Timestamp;
// const timestamp = app.firestore.FieldValue.serverTimestamp();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore, serverStamp };
