import { useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonBoxWithArrow } from 'components';
import * as Styled from './StyleNavBar';
import logoImg from 'assets/logo.svg';

const NavBar = ({ children, onClick }) => {
  const imageBoxRef = useRef();
  const location = useLocation();
  // const [navProp, setNavProp] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      imageBoxRef.current.style.visibility = 'hidden';
      // setNavProp('homepage');
    }
  }, [location]);

  return (
    <Styled.NavBarContainer>
      <Styled.NavBarLogoBox ref={imageBoxRef}>
        <Link to={'/'}>
          <Styled.NavBarLogo src={logoImg} />
        </Link>
      </Styled.NavBarLogoBox>
      <ButtonBoxWithArrow onClick={onClick}>{children}</ButtonBoxWithArrow>
    </Styled.NavBarContainer>
  );
};

export default NavBar;
