import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
