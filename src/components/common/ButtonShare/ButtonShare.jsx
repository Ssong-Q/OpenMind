import linkIcon from 'assets/link-icon.svg';
import facebookIcon from 'assets/facebook-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';
import * as Styled from './StyleButtonShare.js';

function ButtonShare() {
  const shares = [linkIcon, kakaoIcon, facebookIcon];

  return (
    <Styled.Ul>
      {shares.map((option) => {
        return (
          <li key={option}>
            <img src={option} />
          </li>
        );
      })}
    </Styled.Ul>
  );
}

export default ButtonShare;
