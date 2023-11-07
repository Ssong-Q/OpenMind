import styled, { keyframes } from 'styled-components';
import closeBtnImg from 'assets/icon/close.svg';
import spinnerImg from 'assets/spinner.png';

const placeholderRotate = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  position: fixed;
  top: -${window.scrollY}px;
  left: 0;
  overflow-y: scroll;
`;

export const ModalTitle = styled.h3`
  text-align: center;
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

export const Spinner = styled.div`
  animation: ${placeholderRotate} 1.5s linear infinite;
  z-index: 9999;
  position: absolute;
  top: 42%;
  left: 46%;
  width: 100px;
  height: 100px;
  background-image: url(${`${spinnerImg}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
