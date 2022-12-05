import React from "react";
import { firestore} from "src/firebase";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";

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

const DetailTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-left: 24px;
`;

const DetailContent = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-left: 24px;
  margin-top: 10px;
`;

export default function Data2() {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(firestore, "carrot");



  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUsers();
  }, []);

  // 띄워줄 데이터 key값에 고유ID를 넣어준다.
  const showUsers = users.map((value) => (
    <>
      <Container>
        <Product>
          <Thumbnail />
          <FlexGrow>
            <Title>{value.c_funding_title}</Title>
            <Price>목표 모금액 : {value.c_funding_target_amount} eth</Price>
            <Date>{value.c_funding_end_date.toDate().toString()}</Date>
          </FlexGrow>
        </Product>
        <DetailTitle>{value.c_funding_details}</DetailTitle>
        <DetailContent>{value.c_funding_content}</DetailContent>
      </Container>
    </>
  ));

  return (
    <>
      <div>{showUsers}</div>
    </>
  );
}
