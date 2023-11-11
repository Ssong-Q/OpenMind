import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 103px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--gray30);
  background-color: var(--gray10);
  box-shadow: var(--shadow-1pt);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: var(--gray50);
  fill: var(--gray50);

  &:hover {
    background-color: var(--gray20);
    color: var(--gray60);
    fill: var(--gray60);
  }

  ${({ $modify }) =>
    $modify === 'modify' &&
    `
    background-color: var(--gray10);
    color: var(--blue);
    fill: var(--blue);
  `}
`;
