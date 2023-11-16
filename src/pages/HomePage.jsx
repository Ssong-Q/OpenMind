import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  NavBar,
  InputField,
  ButtonBox,
  ButtonBoxWithArrow,
  ModalLoading,
  Toggle,
} from 'components';
import { getSubjects, postSubjects } from 'api/api';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';
import useWindowSizeCustom from 'hooks/useWindowSize';
import * as Styled from './StyleHomePage';

const MOBILE_SIZE = 767;

const HomePage = () => {
  const navigate = useNavigate();
  const { width: browserWidth } = useWindowSizeCustom();
  const { setTheme } = useOutletContext();
  const [name, setName] = useState('');
  const [allList, setAllList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //사용자들 정보 모두 가져와서 저장
  const handleAllList = async () => {
    try {
      const result = await Promise.all([getSubjects(null, 9999, 0)]);
      const list = [];
      result[0].results.map((data) => list.push(data.name));
      setAllList((prevArray) => [...prevArray, list]);
    } catch (error) {
      console.error(error);
      navigate(`/FailToLoadData`);
    }
  };

  const handleButtonClick = async () => {
    let regex = /^[a-zA-Z0-9가-힣]*$/;
    if (!regex.test(name)) {
      setIsError(true);
      setErrorMessage('올바르지 않는 닉네임 입니다. 다시 입력해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      if (getLocalStorage(name)) {
        // localStorage에 Input에 입력한 name에 맞는 userId가 있을 때
        const storedId = getLocalStorage(name);
        const { id: userId } = await getSubjects(storedId);
        navigate(`/post/${userId}/answer`);
      } else {
        // localStorage에 userInfo가 없거나, input에 입력한 name에 맞는 userId가 없을 때
        // 새로 계정 만드는데, 닉네임이 중복되는 경우
        if (allList[0].includes(name)) {
          setIsError(true);
          setErrorMessage('이미 존재하는 닉네임 입니다. 다시 입력해주세요.');
        } else {
          // 닉네임 중복되지 않아, 새로 만드는 경우
          const formData = JSON.stringify({ name: `${name}` });
          const { id: userId, name: userName } = await postSubjects(formData);
          setLocalStorage(userId, userName);
          navigate(`/post/${userId}/answer`);
        }
      }
    } catch (error) {
      console.error(error);
      navigate(`/WrongInformation`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (name) => {
    setName(name);
  };

  const handleNavClick = () => {
    navigate('/list/1/time');
  };

  useEffect(() => {
    handleAllList();
  }, []);

  useEffect(() => {
    setIsError(false);
  }, [name]);

  return (
    <Styled.PageContainer>
      <Toggle setTheme={setTheme} mobile="mobile" />
      <NavBar onClick={handleNavClick} setTheme={setTheme}>
        질문하러 가기
      </NavBar>
      <Styled.MainContainer>
        <Styled.LogoImg />
        {browserWidth <= MOBILE_SIZE && (
          <ButtonBoxWithArrow onClick={handleNavClick}>
            질문하러 가기
          </ButtonBoxWithArrow>
        )}
        <Styled.InputBox>
          <InputField onChange={handleInputChange} />
          {isError ? <Styled.Alert>{errorMessage}</Styled.Alert> : null}
          <ButtonBox onClick={handleButtonClick}>질문 받기</ButtonBox>
        </Styled.InputBox>
      </Styled.MainContainer>
      <Styled.TwoGuysImg />
      {isLoading && <ModalLoading />}
    </Styled.PageContainer>
  );
};

export default HomePage;
