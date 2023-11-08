import { ProfileImage, ButtonShare } from 'components';
import * as Styled from './StylePostHeader';
import LogoImg from 'assets/logo.svg';

function PostHeader({ src, name }) {
  return (
    <>
      <Styled.Header>
        <Styled.Container>
          <Styled.Logo src={LogoImg} />
          <ProfileImage src={src} size="xLarge" mobilesize="large" />
          <Styled.Name>{name}</Styled.Name>
          <ButtonShare name={name} image={src} />
        </Styled.Container>
      </Styled.Header>
    </>
  );
}

export default PostHeader;
