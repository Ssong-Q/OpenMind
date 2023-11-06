<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalPortal from 'Portal';
import { StyledGlobal } from 'style/StyleGlobal';
import { getLocalStorage } from 'utils/function';
import { getSubjects } from 'api/api';
=======
import styled from 'styled-components';
import ModalPortal from 'Portal';
import { StyledGlobal } from 'style/StyleGlobal';
import ModalPortal from 'Portal';
>>>>>>> c6d9cee (feat: 모달창 구현, Nav Bar 일부 수정, checkLocalStorage 함수 구현)
import { InputBox } from 'pages/StyleHomePage';
import { InputField, ButtonBox } from 'components';
import * as Styled from './Modal';

const StyledInputBox = styled(InputBox)`
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 196px;
  transform: translate(-50%, -50%);
`;

const ModalListPage = ({ onClose }) => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleButtonClick = async () => {
    try {
      const storedId = getLocalStorage(name);
      const { id: userId } = await getSubjects(storedId);
      navigate(`/post/${userId}/answer`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (name) => {
    setName(name);
  };

=======
>>>>>>> c6d9cee (feat: 모달창 구현, Nav Bar 일부 수정, checkLocalStorage 함수 구현)
  const handleCloseClick = () => {
    onClose(false);
  };

  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground>
          <StyledInputBox>
            <Styled.ModalTitle>계정이 있으신가요?</Styled.ModalTitle>
<<<<<<< HEAD
            <InputField onChange={handleInputChange} />
            <ButtonBox onClick={handleButtonClick}>답변하러 가기</ButtonBox>
=======
            <InputField />
            <ButtonBox>답변하러 가기</ButtonBox>
>>>>>>> c6d9cee (feat: 모달창 구현, Nav Bar 일부 수정, checkLocalStorage 함수 구현)
            <Styled.ModalCloseBtn onClick={handleCloseClick} />
          </StyledInputBox>
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalListPage;
