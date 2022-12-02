import React from "react";
import { firestore } from "src/firebase";
import { useEffect, useState } from "react";

export default function Data1() {
  const [docId, setDocId] = useState();

  useEffect(() => {
    // bucket이라는 변수로 firestore의 collection인 bucket에 접근
    const bucket = firestore.collection("changeFunding");

    // collection의 document인 "bucket_item"을 가져온다.
    bucket
      .doc("OiuadHybToDGRSoUN9HO")
      .get()
      .then((doc) => {
        // document의 데이터를 가져옴
        setDocId(doc.data().c_funding_content);
        // document의 id를 가져옴
         console.log(doc.id);
        
      });
  });


  return <div>{docId}</div>;
}
