import * as Styled from './StyleProfileImage';

function ProfileImage({ src, size, mobileSize }) {
  return (
    <Styled.Div>
      <Styled.Img
        src={src}
        alt="프로필 이미지"
        size={size}
        mobileSize={mobileSize}
      />
    </Styled.Div>
  );
}

export default ProfileImage;
