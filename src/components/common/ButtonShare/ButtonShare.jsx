import { useState } from 'react';
import Toast from '../Toast/Toast';
import * as Styled from './StyleButtonShare.js';
import * as handle from 'utils/shareSNS.js';
import linkIcon from 'assets/link-icon.svg';
import facebookIcon from 'assets/facebook-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';

function ButtonShare({ name, src }) {
  const [isToastOn, setIsToastOn] = useState(false);

  const sharedUrl = window.location.href;

  const handleCopyUrl = (url) => {
    try {
      handle.copyUrl(url);
      setIsToastOn(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.Ul>
          <Styled.Img
            src={linkIcon}
            onClick={() => {
              handleCopyUrl(sharedUrl);
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
      </Styled.Container>
      {isToastOn && (
        <Toast setStatus={setIsToastOn}>URL이 복사되었습니다</Toast>
      )}
    </>
  );
}

export default ButtonShare;
