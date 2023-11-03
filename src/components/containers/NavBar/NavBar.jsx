import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonBox } from 'components';
import * as Styled from './StyleNavBar';
import logoImg from 'assets/logo.svg';

const NavBar = ({ children }) => {
  const imageRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      imageRef.current.style.visibility = 'hidden';
    }
  }, [location]);

  return (
    <Styled.NavBarContainer>
      <Styled.NavBarLogo src={logoImg} ref={imageRef} />
      <ButtonBox>{children}</ButtonBox>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
