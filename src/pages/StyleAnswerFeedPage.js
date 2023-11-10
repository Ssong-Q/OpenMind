import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 1199px) {
    padding: 0 32px;
  }
`;

export const ObserveTargetBox = styled.div`
  width: 100%;
  height: 120px;
`;

export const WriteButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 12px 28px;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--brown40);
  color: white;
  font-family: Actor;
  font-size: 20px;
  line-height: 25px;
`;
