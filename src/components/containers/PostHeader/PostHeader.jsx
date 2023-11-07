import { ProfileImage, ButtonShare } from 'components';
import * as Styled from './StylePostHeader';
import TwoGuysImg from 'assets/twoguys-image-half.svg';
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
        <Styled.Background src={TwoGuysImg} />
      </Styled.Header>
    </>
  );
}

export default PostHeader;
