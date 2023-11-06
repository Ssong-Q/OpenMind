import styled from 'styled-components';
import logoImg from 'assets/logo.svg';

import twoGuysImage from 'assets/two-guys-image.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  gap: 20px;
  background-color: transparent;
`;

export const LogoImg = styled.div`
  z-index: 10;
  width: 450px;
  height: 176px;
  margin-top: 160px;
  background-image: url(${logoImg});
  background-size: cover;
  background-position: center;
`;

export const InputBox = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  height: 172px;
  padding: 32px;
  border-radius: 16px;
  background-color: var(--gray10);
`;

export const TwoGuysImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  max-width: 1800px;
  height: 100vh;
  background-image: url(${twoGuysImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;
