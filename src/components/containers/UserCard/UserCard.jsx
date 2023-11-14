import { Link } from 'react-router-dom';
import { ProfileImage } from 'components';
import * as Styled from './StyleUserCard';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

function UserCard({ id, src, name, count }) {
  const theme = useContext(ThemeContext);

  return (
    <Link to={`/post/${id}`}>
      <Styled.Container>
        <Styled.ProfileContainer>
          <ProfileImage src={src} size="mediumLarge" mobilesize="mediumSmall" />
          <Styled.Name>{name}</Styled.Name>
        </Styled.ProfileContainer>
        <Styled.InfoContainer>
          <Styled.Div>
            <Styled.MessageIcon src={theme.icon} />
            <Styled.P>받은 질문</Styled.P>
          </Styled.Div>
          <Styled.P>{count}개</Styled.P>
        </Styled.InfoContainer>
      </Styled.Container>
    </Link>
  );
}

export default UserCard;
