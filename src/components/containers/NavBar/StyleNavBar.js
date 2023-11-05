import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 45px 125px;

  @media (max-width: 1199px) {
    padding: 44px 45px;
  }
`;

export const NavBarLogo = styled.img`
  width: 146px;
  height: 57px;
`;
