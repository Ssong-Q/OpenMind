import styled from 'styled-components';
import logoImg from 'assets/logo.svg';
import twoGuysImg from 'assets/two-guys.svg';

export const MainContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const LogoImg = styled.div`
  background-image: url(${logoImg});
  background-size: cover;
  background-position: center;
  width: 450px;
  height: 170px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  height: 172px;
  padding: 32px;
  border-radius: 16px;
  background-color: var(--gray10);
`;

export const TwoGuysImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${twoGuysImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
