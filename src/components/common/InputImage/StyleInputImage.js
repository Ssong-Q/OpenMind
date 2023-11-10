import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  label{
    border-radius: 70%;
    overflow: hidden;

    :hover {
      filter: brightness(0.5);
    }
  }

  img{
    width: 150px;
    border-radius: 70%;
    overflow: hidden;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
