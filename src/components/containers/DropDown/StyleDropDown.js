import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -20px;
  position: relative;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 79px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ $status }) =>
      $status === 'false' ? `var(--gray40)` : `var(--gray60)`};
  background: var(--gray10);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: ${({ $status }) =>
    $status === 'false' ? `var(--gray40)` : `var(--gray60)`};
  cursor: pointer;
`;
