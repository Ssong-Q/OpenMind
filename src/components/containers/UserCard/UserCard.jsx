import * as Styled from './StyleUserCard';

function UserCard({ src, name, count }) {
  return (
    <Styled.Container>
      <Styled.ProfileContainer>
        <Styled.Img src={src} alt="프로필 이미지" />
        <Styled.Name>{name}</Styled.Name>
      </Styled.ProfileContainer>
      <Styled.InfoContainer>
        <Styled.Div>
          <Styled.MessageIcon fill="var(--gray40)" />
          <Styled.P>받은 질문</Styled.P>
        </Styled.Div>
        <Styled.P>{count}개</Styled.P>
      </Styled.InfoContainer>
    </Styled.Container>
  );
}

export default UserCard;
