import { styled } from "styled-components";

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled(TitleBox)`
  gap : 8px;
  color: var(--gray60); 
  font-family: Actor;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 30px; 

  @media (max-width:767px){
    font-size : 2rem;
    line-height: 25px;
  }
`