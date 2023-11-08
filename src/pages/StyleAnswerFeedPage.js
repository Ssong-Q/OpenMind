import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 140px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 684px;
`;

export const DeleteButton = styled.button`
  padding: 8px 24px;
  border-radius: 200px;
  flex-shrink: 0;
  background: var(--brown40);
  color: white;
  font-family: Actor;
  font-size: 1.5rem;
  line-height: 25px;
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
