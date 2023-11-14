import { useRef, useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonBoxWithArrow } from 'components';
import { ThemeContext } from 'styled-components';
import logoImg from 'assets/logo.svg';
import christmasLogoImg from 'assets/christmas-logo.png';
import * as Styled from './StyleNavBar';

const NavBar = ({ children, onClick }) => {
  const imageBoxRef = useRef();
  const location = useLocation();
  const [navProp, setNavProp] = useState('');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (location.pathname === '/') {
      imageBoxRef.current.style.visibility = 'hidden';
      setNavProp('homepage');
    } else {
      setNavProp('list');
    }
  }, [location]);

  return (
    <Styled.NavBarContainer $location={navProp}>
      <Styled.NavBarLogoBox ref={imageBoxRef}>
        <Link to={'/'}>
          <Styled.NavBarLogo src={theme.snow ? christmasLogoImg : logoImg} />
        </Link>
      </Styled.NavBarLogoBox>
      <ButtonBoxWithArrow onClick={onClick}>{children}</ButtonBoxWithArrow>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
