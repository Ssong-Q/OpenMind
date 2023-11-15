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
  color: ${({ $select, theme }) =>
    $select === 'selected' ? `${theme.color.color3}`: `${theme.color.color4}`};

  &:hover {
    color: ${({theme}) => theme.color.color5};
  }
`;

export const PageDot = styled(PageButton)`
  cursor: unset;
  &:hover {
    color: var(--gray40);
  }
`;
