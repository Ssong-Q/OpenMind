import { styled } from "styled-components";

export const Container = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center;
  gap : ${({active}) => active ? '16px' : '0px'};
  padding : 16px;
  width : 716px;
  border-radius: 16px;
  border: 1px solid var(--brown20);
  background: var(--brown10);
`

export const Title = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  gap : 8px;
  width : 100%;
  
`