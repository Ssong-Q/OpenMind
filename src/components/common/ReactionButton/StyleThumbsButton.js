import { styled } from "styled-components";

export const Container = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  gap : 6px;
  cursor : pointer;

  span{
    color: ${({active}) => active ===1 ?'var(--blue)' : 'var(--gray40)'};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
`