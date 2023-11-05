import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavBar, InputField, ButtonBox } from 'components';
import { getSubjects, postSubjects } from 'api/api';
import { getLocalStorage, setLocalStorage } from 'utils/function';
import * as Styled from './StyleHomePage';

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleButtonClick = async () => {
    try {
      if (getLocalStorage(name)) {
        // localStorage에 Input에 입력한 name에 맞는 userId가 있을 때
        const storedId = getLocalStorage(name);
        const { id: userId } = await getSubjects(storedId);
        navigate(`/post/${userId}/answer`);
      } else {
        // localStorage에 userInfo가 없거나, input에 입력한 name에 맞는 userId가 없을 때
        const formData = JSON.stringify({ name: `${name}` });
        const { id: userId, name: userName } = await postSubjects(formData);
        setLocalStorage(userId, userName);
        navigate(`/post/${userId}/answer`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (name) => {
    setName(name);
  };

  return (
    <>
      <NavBar>질문하러 가기</NavBar>
      <Styled.MainContainer>
        <Styled.LogoImg />
        <Styled.InputBox>
          <InputField onChange={handleInputChange} />
          <ButtonBox onClick={handleButtonClick}>질문 받기</ButtonBox>
        </Styled.InputBox>
      </Styled.MainContainer>
      <Styled.TwoGuysImg />
    </>
  );
};

export default HomePage;
