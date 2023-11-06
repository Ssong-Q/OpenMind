import { ProfileImage, ButtonShare } from 'components';
import * as Styled from './StylePostHeader';

function PostHeader({ src, name }) {
  return (
    <>
      <Styled.Header>
        <Styled.Container>
          <Styled.Logo />
          <ProfileImage src={src} size="xLarge" mobileSize="large" />
          <Styled.Name>{name}</Styled.Name>
          <ButtonShare />
        </Styled.Container>
        <Styled.Background />
      </Styled.Header>
    </>
  );
}

export default PostHeader;
