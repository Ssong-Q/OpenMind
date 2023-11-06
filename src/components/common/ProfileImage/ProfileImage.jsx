import * as Styled from './StyleProfileImage';

function ProfileImage({ src, size, mobilesize }) {
  return (
    <Styled.Container size={size} mobileSize={mobilesize}>
      <Styled.Img src={src} alt="프로필이미지" />
    </Styled.Container>
  );
}

export default ProfileImage;
