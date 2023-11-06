import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 35px 125px 20px;

  @media (max-width: 1199px) {
    padding: 35px 45px 20px;
  }
`;

export const NavBarLogoBox = styled.div``;

export const NavBarLogo = styled.img`
  width: 146px;
  height: 57px;
`;
