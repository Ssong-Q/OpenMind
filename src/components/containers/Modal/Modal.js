import styled from 'styled-components';
import closeBtnImg from 'assets/icon/close.svg';

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
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
