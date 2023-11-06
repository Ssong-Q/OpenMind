import styled from 'styled-components';
import { StyledGlobal } from 'style/StyleGlobal';
import ModalPortal from 'Portal';
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
            <InputField />
            <ButtonBox>답변하러 가기</ButtonBox>
            <Styled.ModalCloseBtn onClick={handleCloseClick} />
          </StyledInputBox>
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalListPage;
