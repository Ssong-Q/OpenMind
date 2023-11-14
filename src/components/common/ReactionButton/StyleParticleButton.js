import { styled } from 'styled-components';

export const Shape = styled.img`
  z-index: 15;
  width: 40px;
  height: 40px;

  position: absolute;
  top: ${({ x }) => x},
  left: ${({ y }) => y},


  transform: ${({ scale }) => 'scale(0.' + scale + ')'},
  transition: ${({ sec }) => sec}ms,

  animation: moving 0.5s linear reverse forwards;
  @keyframes moving {
    0%{
      transform: scale(0);
    }
    10%{
      transform: scale(1);
    }
    100%{
      top: 50%;
      left: 50%;
    }
  }
`;

export const BtnContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: yellow;
`;

export const Btn = styled.button`
  height: 30px;
  border-radius: 4px;
  text-align: center;
  z-index: 10;
  background-color: red;
`;

export const BtnParticles = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;

  border-radius: 50%;
  color: #eee;
  z-index: 5;
  background-color: green;

  overflow: hidden;
`;
