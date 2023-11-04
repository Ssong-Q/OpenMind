// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { NavBar, InputField, ButtonBox } from 'components';
// import { getSubjects } from 'api/api';
import * as Styled from './StyleHomePage';

const HomePage = () => {
  // const [id, setId] = useState(null);

  // const handleButtonClick = () => {
  //   try {

  //   }
  // }

  // useEffect(() => {

  // })

  return (
    <>
      <NavBar>질문하러 가기</NavBar>
      <Styled.MainContainer>
        <Styled.LogoImg />
        <Styled.InputBox>
          <InputField />
          <ButtonBox>질문 받기</ButtonBox>
        </Styled.InputBox>
      </Styled.MainContainer>
      <Styled.TwoGuysImg />
    </>
  );
};

export default HomePage;
