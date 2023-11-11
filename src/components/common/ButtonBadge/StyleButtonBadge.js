import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ color }) => (color === 'brown' ? `var(--brown40)` : `var(--gray40)`)};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: ${({ color }) =>
    color === 'brown' ? `var(--brown40)` : `var(--gray40)`};
  cursor: unset;
`;
