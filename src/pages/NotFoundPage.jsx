import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as Styled from './StyleNotFoundPage';
import logo from 'assets/logo.svg';

const NotFoundPage = () => {
  const location = useLocation();
  const whatErrorFrom = location.pathname.split('/')[1];
  const [message, setMessage] = useState('');
  const theme = useContext(ThemeContext);
  const gifUrl = theme.snow
    ? 'https://media.giphy.com/media/3orifiKw74WT9ADnsQ/giphy.gif'
    : 'https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif?cid=ecf05e47xhk2cqh66hl2qlmrhfd23c3s0gt2dbkcxl9y6cdq&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  const handlePrintMessage = (message) => {
    if (message === 'UseYourOwnAccount') {
      setMessage('Use Your Own Account!');
    } else if (message === 'InvalidQuestionSubject') {
      setMessage('Invalid Question Subject!');
    } else if (message === 'FailToLoadData') {
      setMessage('Fail to load data. Try again!');
    } else if (message === 'WrongInformation') {
      setMessage('Wrong information. Try again!');
    }
  };

  useEffect(() => {
    handlePrintMessage(whatErrorFrom);
  }, [location]);

  const handlePrintMessage = (message) => {
    if (message === 'UseYourOwnAccount') {
      setMessage('Use Your Own Account!');
    } else if (message === 'InvalidQuestionSubject') {
      setMessage('Invalid Question Subject!');
    }
  };

  useEffect(() => {
    handlePrintMessage(whatErrorFrom);
  }, [location]);

  return (
    <Styled.MainContainer>
      <Styled.Nav>
        <Link to="/">
          <Styled.Logo src={logo} />
        </Link>
        <Styled.P>홈페이지로 돌아가기👆</Styled.P>
      </Styled.Nav>
      <Styled.ContentContainer>
        <Styled.H1>Oops!</Styled.H1>
        <Styled.H2>Something went wrong</Styled.H2>
        <Styled.H3>{message}</Styled.H3>
        <img src={gifUrl} alt="not found page" width={'400'} height={'400'} />
      </Styled.ContentContainer>
    </Styled.MainContainer>
  );
};

export default NotFoundPage;
