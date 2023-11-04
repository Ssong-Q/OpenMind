import styled from 'styled-components';

export const InputTextArea = styled.input`
  width: 336px;
  height: 140px;
  padding: 16px;
  background-color: var(--gray20);
  border-radius: 8px;
  border: none;
  ${({ isFocused }) => isFocused && 'border : 1px solid  var(--brown40)'};

  &::placeholder {
    color: var(--gray40);
  }
`;
