import * as Styled from './StyleButtonShare.js';
import * as handle from 'utils/shareSNS.js';
import linkIcon from 'assets/link-icon.svg';
import facebookIcon from 'assets/facebook-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';

function ButtonShare({ name, src }) {
  const sharedUrl = window.location.href;

  return (
    <Styled.Ul>
      <Styled.Img
        src={linkIcon}
        onClick={() => {
          handle.copyUrl(sharedUrl);
        }}
      />
      <Styled.Img
        src={kakaoIcon}
        onClick={() => {
          handle.shareKakao(name, src, sharedUrl);
        }}
      />
      <Styled.Img
        src={facebookIcon}
        onClick={() => {
          handle.shareFacebook(sharedUrl);
        }}
      />
    </Styled.Ul>
  );
}

export default ButtonShare;
