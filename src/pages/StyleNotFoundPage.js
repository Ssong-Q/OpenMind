import { styled } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 1000px;
`;

export const Nav = styled.div`
  z-index: 10;
  text-align: center;
  margin-top: 60px;
  width: 100%;
  height: auto;
`;

export const ContentContainer = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin-top: -100px;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  min-width: 200px;
`;

export const H1 = styled.h1`
  font-family: Pretendard;
  font-size: 6rem;
  font-weight: 500;
`;

export const H2 = styled(H1)`
  font-size: 4rem;
`;

export const H3 = styled.h3`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 500;
  color: var(--red);
`;

export const P = styled.p`
  margin-top: 20px;
  font-size: 1.5rem;
  color: var(--gray40);
`;
