import styled from 'styled-components';

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize : none;
  padding: 16px;
  background-color: var(--gray20);
  outline-color : ${(props) => (props.$focused === 'true') && 'border: 1px solid var(--brown40)'};
  border : none;
  border-radius: 8px;
  
  &::placeholder {
    color: var(--gray40);
  }
`;
