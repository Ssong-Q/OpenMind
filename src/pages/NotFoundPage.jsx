import * as Styled from './StyleNotFoundPage';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';

const NotFoundPage = () => {
  const gifUrl =
    'https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif?cid=ecf05e47xhk2cqh66hl2qlmrhfd23c3s0gt2dbkcxl9y6cdq&ep=v1_gifs_search&rid=giphy.gif&ct=g';

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
        <img src={gifUrl} width={'400'} height={'400'} />
      </Styled.ContentContainer>
    </Styled.MainContainer>
  );
};

export default NotFoundPage;
