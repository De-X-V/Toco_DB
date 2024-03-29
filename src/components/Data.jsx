import React from "react";
import { firestore } from "src/firebase";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getDday } from "src/hooks/getDday";
import { getLastTime } from "src/hooks/getLastTime";

const Container = styled.div`
  margin-top: 20px;
`;

const Product = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 10px;
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

const ThumbNail = styled.div`
  max-width: 200px;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundUrl});
`;

export default function Data() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "편의점과자");

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(
        data.docs.map((doc, i) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  },[]);

  const showUsers = users.map((value, i) => (
    <Container key={i}>
      <Product>
        <ThumbNail backgroundUrl={value.이미지} />
        <FlexGrow>
          <Title>{value.이름}</Title>
          <Price> 칼로리 : {value.칼로리} kcal</Price>
          <Date>유통기한 : {value.유통기한}</Date>
          <Date>유통기간 : D{getDday(value.유통기간)}</Date>
          <Date>유통기간 : {getLastTime(value.유통기간)}</Date>
        </FlexGrow>
      </Product>
    </Container>
  ));

  return (
    <>
      <div>{showUsers}</div>
    </>
  );
}
