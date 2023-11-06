import * as Styled from './StyleProfileImage';

function ProfileImage({ src, size, mobileSize }) {
  return (
    <Styled.Container size={size} mobileSize={mobileSize}>
      <Styled.Img src={src} alt="프로필이미지" />
    </Styled.Container>
  );
}

export default ProfileImage;
