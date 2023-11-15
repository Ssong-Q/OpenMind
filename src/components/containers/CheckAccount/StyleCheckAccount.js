import styled from 'styled-components';
import { InputBox } from 'pages/StyleHomePage';
import closeBtnImg from 'assets/icon/close.svg';

export const Input = styled(InputBox)`
  z-index: 9999;
  position: absolute;
  top: 73%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media(max-width:767px){
    top: 60%;
    left: 50%;
  }
`;

export const ModalCloseBtn = styled.div`
  background-image: url(${closeBtnImg});
  background-position: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Alert = styled.div`
  color: red;
  font-size: 13px;
  font-weight: 500;
`;