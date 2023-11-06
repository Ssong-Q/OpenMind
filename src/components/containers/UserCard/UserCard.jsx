import * as Styled from './StyleUserCard';
import { ProfileImage } from 'components';

function UserCard({ src, name, count }) {
  return (
    <Styled.Container>
      <Styled.ProfileContainer>
        <ProfileImage src={src} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.ProfileContainer>
      <Styled.InfoContainer>
        <Styled.Div>
          <Styled.MessageIcon />
          <Styled.P>받은 질문</Styled.P>
        </Styled.Div>
        <Styled.P>{count}개</Styled.P>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}

export default UserCard;
