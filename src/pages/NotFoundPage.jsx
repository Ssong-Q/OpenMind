import { Link } from 'react-router-dom';
import { LogoImg } from './StyleHomePage';
import * as Styled from './StyleNotFoundPage';
import oops from 'https://media.giphy.com/media/1Y7ChRtbWnYONjDidg/giphy.gif?cid=ecf05e478cxycm5lpmezvl1bcx4hz3qcw73d9gwp6blve7zh&ep=v1_gifs_search&rid=giphy.gif&ct=g';

const NotFoundPage = () => {
  return (
    <Styled.Div>
      <Link to="/">
        <LogoImg />
      </Link>
      <Styled.Container>
        <h1>Oops! something went wrong</h1>
        <img src={oops} width={'100'} height={'100'} />
      </Styled.Container>
    </Styled.Div>
  );
};

export default NotFoundPage;
