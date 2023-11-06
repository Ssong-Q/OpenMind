import styled from 'styled-components';

export const Ul = styled.ul`
  width: 79px;
  margin-top: 2px;
  padding: 4px 0px;
  border-radius: 8px;
  border: 1px solid var(--gray30);
  background-color: var(--gray10);
  box-shadow: var(--shadow-1pt);
  z-index: 1;
`;

export const Button = styled.button`
  align-self: stretch;
  width: 100%;
  padding: 6px 16px;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: ${({ select }) => (select ? `var(--blue)` : `var(--gray50)`)};
  cursor: pointer;

  &:hover {
    background-color: var(--gray20);
  }
`;
