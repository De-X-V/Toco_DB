//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_C3BaIYgyv4UMODkyR3E8feQFDsyp6SI",
  authDomain: "toco-15eaf.firebaseapp.com",
  projectId: "toco-15eaf",
  storageBucket: "toco-15eaf.appspot.com",
  messagingSenderId: "1037324260716",
  appId: "1:1037324260716:web:9fb3d1e2228d86e4b70f49",
  measurementId: "G-PKLBH3KXBZ",
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
