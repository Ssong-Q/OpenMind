import { ProfileImage, ButtonShare } from 'components';
import { Link } from 'react-router-dom';
import * as Styled from './StylePostHeader';
import LogoImg from 'assets/logo.svg';

function PostHeader({ src, name }) {
  return (
    <>
      <Styled.Header>
        <Styled.Container>
          <Link to={'/'}>
            <Styled.Logo src={LogoImg} />
          </Link>
          <ProfileImage src={src} size="xLarge" mobilesize="large" />
          <Styled.Name>{name}</Styled.Name>
          <ButtonShare name={name} image={src} />
        </Styled.Container>
      </Styled.Header>
    </>
  );
}

export default PostHeader;
