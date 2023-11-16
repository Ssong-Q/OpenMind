import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  left: 47%;
  cursor: pointer;
  display: ${({ $mobile }) => $mobile === 'mobile' && 'none'};

  @media (max-width: 767px) {
    display: unset;
    position: absolute;
    top: 46px;
    left: 67px;
  }
`;

export const ToggleBox = styled.div`
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: ${({ $isOn }) => ($isOn ? '#942920' : 'var(--brown20)')};
  ${({ $isOn }) => $isOn && `transition: 0.5s`};
  transition: 0.5s;
`;

export const ToggleCircle = styled.div`
  position: absolute;
  top: 1px;
  ${({ $isOn }) => ($isOn ? 'right: 1px' : 'left: 1px')};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  transition: 0.5s;
`;
