import styled from 'styled-components';

const PageButton = styled.button`
  width: 4rem;
  height: 4rem;
  text-align: center;
  font-size: 2rem;
  font-family: Actor;
  line-height: 125%;
  color: var(--gray40);

  &:hover {
    color: var(--gray60);
  }
`;

export default PageButton;
