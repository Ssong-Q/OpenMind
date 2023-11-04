import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonBoxWithArrow } from 'components';
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
      <ButtonBoxWithArrow>{children}</ButtonBoxWithArrow>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
