import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 684px;
  margin-top: 54px;
  padding: 16px;
  border: 1px solid var(--brown30);
  border-radius: 16px;
  background: var(--brown10);

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CountContent = styled.div`
  font-family: Actor;
  font-size: 2rem;
  line-height: 25px;
  color: var(--brown40);
`;
