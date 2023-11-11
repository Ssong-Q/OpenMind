import * as Styled from './StyleProfileImage';

function ProfileImage({ src, size, mobilesize, onClick }) {
  return (
    <Styled.Container $size={size} $mobilesize={mobilesize} onClick={onClick}>
      <Styled.Img src={src} alt="프로필이미지" />
    </Styled.Container>
  );
}

export default ProfileImage;
