import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 45px 125px 20px;
  z-index: 10;

  @media (max-width: 1199px) {
    padding: 44px 45px 20px;
  }
`;

export const NavBarLogoBox = styled.div``;

export const NavBarLogo = styled.img`
  width: 146px;
  height: 57px;
`;
