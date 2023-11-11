import styled from 'styled-components';

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PageButton = styled.button`
  width: 4rem;
  height: 4rem;
  text-align: center;
  font-size: ${({ $select }) => ($select === 'selected' ? `2.3rem` : `2rem`)};
  font-family: Actor;
  line-height: 125%;
  color: ${({ $select }) =>
    $select === 'selected' ? `var(--brown50)` : `var(--gray40)`};

  &:hover {
    color: var(--gray60);
  }
`;
