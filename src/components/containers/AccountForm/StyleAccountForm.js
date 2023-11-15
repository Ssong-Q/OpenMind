import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  gap: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 24px;
  background-color: var(--gray20);
  border-radius: 8px;
  font-size: 1.4rem;
  text-align: center;
`

export const Button = styled.button`
  width : 100px;
  padding: 12px 12px;
  border : none;
  border-radius: 8px;
  font-size: 1rem;
  color : #fff;
  background-color: ${({theme}) => theme.button.button3};

  &:hover {
    background-color: ${({theme}) => theme.button.button2};
  }
`