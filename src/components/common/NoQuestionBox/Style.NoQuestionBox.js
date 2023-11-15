import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: ${({ active }) => (active ? '16px' : '0px')}; */
  padding: 60px 0;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
