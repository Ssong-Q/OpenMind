import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: flex-start;
  width: 220px;
  height: 187px;
  padding: 20px;
  border: 1px solid var(--gray40);
  border-radius: 16px;
  background: var(--gray10);
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;

export const Name = styled.p`
  font-family: Actor;
  font-size: 2rem;
  line-height: 125%;
  color: var(--gray60);
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 137.5%;
  color: var(--gray40);
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
