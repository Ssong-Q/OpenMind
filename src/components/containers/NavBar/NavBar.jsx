import { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonBoxWithArrow, Toggle } from 'components';
import { ThemeContext } from 'styled-components';
import logoImg from 'assets/logo.svg';
import christmasLogoImg from 'assets/christmas-logo.png';
import * as Styled from './StyleNavBar';

const NavBar = ({ children, onClick, setTheme }) => {
  const location = useLocation();
  const [navProp, setNavProp] = useState('');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (location.pathname === '/') {
      setNavProp('homepage');
    } else {
      setNavProp('list');
    }
  }, [location]);

  return (
    <Styled.NavBarContainer $location={navProp}>
      <Styled.NavBarLogoBox>
        {location.pathname === '/' ? (
          <Toggle setTheme={setTheme} />
        ) : (
          <Link to={'/'}>
            <Styled.NavBarLogo src={theme.snow ? christmasLogoImg : logoImg} />
          </Link>
        )}
      </Styled.NavBarLogoBox>
      <ButtonBoxWithArrow onClick={onClick}>{children}</ButtonBoxWithArrow>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
