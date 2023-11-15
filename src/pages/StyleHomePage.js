import styled from 'styled-components';
import logoImg from 'assets/logo.svg';
import twoGuysImg from 'assets/two-guys-home.svg';
import christmasLogoImg from 'assets/christmas-logo.png';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  background-color: transparent;

  @media (max-width: 767px) {
    position: static;
    gap: 15px;
    width: 80vw;
    height: 100%;
    margin-top: 50px;
  }
`;

export const LogoImg = styled.div`
  width: 450px;
  height: 180px;
  background-image: url(${({ theme }) =>
    theme.snow ? christmasLogoImg : logoImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    margin-top: 20px;
    width: 80%;
    height: 140px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 400px;
  height: 170px;
  padding: 32px;
  border-radius: 16px;
  background-color: var(--gray10);

  @media (max-width: 767px) {
    width: 80%;
    height: 125px;
    padding: 16px;
  }
`;

export const Alert = styled.div`
  color: red;
  font-size: 13px;
  font-weight: 500;
`;

export const TwoGuysImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ theme }) => !theme.snow && `${twoGuysImg}`});
  background-position: ${({ theme }) => !theme.snow && `center bottom`};
  background-size: ${({ theme }) => !theme.snow && `contain`};
  background-repeat: no-repeat;
`;
