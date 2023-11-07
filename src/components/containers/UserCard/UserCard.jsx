import { ProfileImage } from 'components';
import * as Styled from './StyleUserCard';
import messageImg from 'assets/icon/messages.svg';

function UserCard({ src, name, count }) {
  return (
    <Styled.Container>
      <Styled.ProfileContainer>
        <ProfileImage src={src} size="mediumLarge" mobilesize="mediumSmall" />
        <Styled.Name>{name}</Styled.Name>
      </Styled.ProfileContainer>
      <Styled.InfoContainer>
        <Styled.Div>
          <Styled.MessageIcon src={messageImg} />
          <Styled.P>받은 질문</Styled.P>
        </Styled.Div>
        <Styled.P>{count}개</Styled.P>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}

export default UserCard;
