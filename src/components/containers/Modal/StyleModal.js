import styled, { keyframes } from 'styled-components';
import spinnerImg from 'assets/spinner.png';

const placeholderRotate = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;

export const ModalBackground = styled.div`
  background-color: ${({ back }) =>
    back === 'noBG' ? `rgba(0, 0, 0, 0)` : `rgba(0, 0, 0, 0.4)`};
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  position: fixed;
  top: -${window.scrollY}px;
  left: 0;
  overflow-y: scroll;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 612px;
  height: 454px;
  transform: translate(-50%, -50%);
  padding: 40px 40px 70px;
  background-color: var(--gray10);
  border-radius: 24px;
  box-shadow: var(--shadow-3pt);

  @media (max-width: 767px) {
    padding: 22.5px 24px 24px;
    width: 327px;
    height: 568px;
  }
`;
