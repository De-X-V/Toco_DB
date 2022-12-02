import React from "react";
import { firestore } from "src/firebase";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin-top: 20px;
`;

const Product = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 10px;
`;

const Thumbnail = styled.div`
  max-width: 300px;
  width: 200px;
  height: 130px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  background-image: url("https://via.placeholder.com/350");
`;

const FlexGrow = styled.div`
  flex-grow: 100px;
  padding-left: 20px;
  padding-top: 2px;
`;

const Title = styled.h5`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Date = styled.p`
  color: grey;
  font-size: 13px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export default function Data2() {
  const [docContent, setDocContent] = useState();
  const [docId, setDocId] = useState();
  const [docTitle, setDocTitle] = useState();
  const [docEndDate, setDocEndDate] = useState();
  const [docAmount, setDocAmount] = useState();

  useEffect(() => {
    // bucket이라는 변수로 firestore의 collection인 bucket에 접근
    const bucket = firestore.collection("changeFunding");

    // collection의 document인 "bucket_item"을 가져온다.
    bucket
      .doc("OiuadHybToDGRSoUN9HO")
      .get()
      .then((doc) => {
        // document의 데이터를 가져옴
        setDocContent(doc.data().c_funding_content);
        // document의 id를 가져옴
        // setDocId(doc.id);
        setDocTitle(doc.data().c_funding_title);
        setDocEndDate(doc.data().c_funding_end_date);
        setDocAmount(doc.data().c_funding_target_amount);
      });
  });

  return (
    <>
      <Container>
        <Product>
          <Thumbnail />
          <FlexGrow>
            <Title>{docTitle}</Title>
            {/* <Date>{docEndDate}</Date> */}
            <Price>목표 모금액 : {docAmount} klay</Price>
            <Price>{docContent}</Price>
          </FlexGrow>
        </Product>
      </Container>
    </>
  );
}
