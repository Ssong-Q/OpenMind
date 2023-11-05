import { useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonBoxWithArrow } from 'components';
import * as Styled from './StyleNavBar';
import logoImg from 'assets/logo.svg';

const NavBar = ({ children, link }) => {
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
      <Link to={link}>
        <ButtonBoxWithArrow>{children}</ButtonBoxWithArrow>
      </Link>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
