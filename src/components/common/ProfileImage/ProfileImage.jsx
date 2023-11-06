import * as Styled from './StyleProfileImage';

function ProfileImage({ src, size }) {
  return (
    <Styled.Div>
      <Styled.Img src={src} alt="프로필 이미지" size={size} />
    </Styled.Div>
  );
}

export default ProfileImage;
