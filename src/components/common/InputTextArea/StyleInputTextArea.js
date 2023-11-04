import styled from 'styled-components';

export const InputTextArea = styled.textarea`
  width: 336px;
  height: 140px;
  resize : none;
  padding: 16px;
  background-color: var(--gray20);
  outline-color : ${({ isFocused }) => (isFocused === 'true') && 'border: 1px solid var(--brown40)'};
  border : none;
  border-radius: 8px;
  
  &::placeholder {
    color: var(--gray40);
  }
`;
