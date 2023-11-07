import * as Styled from './StyleButtonShare.js';
import handleShareKakaoClick from 'utils/handleShareKakaoClick.js';
import linkIcon from 'assets/link-icon.svg';
import facebookIcon from 'assets/facebook-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';

function ButtonShare({ name, image }) {
  return (
    <Styled.Ul>
      <Styled.Img
        src={linkIcon}
        onClick={() => {
          handleShareKakaoClick(name, image);
        }}
      />
      <Styled.Img
        src={kakaoIcon}
        onClick={() => {
          handleShareKakaoClick(name, image);
        }}
      />
      <Styled.Img
        src={facebookIcon}
        onClick={() => {
          handleShareKakaoClick(name, image);
        }}
      />
    </Styled.Ul>
  );
}

export default ButtonShare;
