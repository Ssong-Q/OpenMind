import { ButtonBox } from 'components/common/ButtonBox/StyleButtonBox';
import styled, { keyframes } from 'styled-components';
import closeBtnImg from 'assets/icon/close.svg';
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: absolute;
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

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 40px;
  margin-bottom: 15px;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const Form = styled.div`
  height: 180px;

  @media (max-width: 767px) {
    height: 358px;
  }
`;

export const Button = styled(ButtonBox)`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  font-size: 1.3rem;
  border: none;
  color: #fff;
  background-color: ${(props) =>
    props.$active ? `var(--brown40)` : `var(--brown30)`};
  cursor: ${({ $active }) => $active === false && `unset`};
`;
