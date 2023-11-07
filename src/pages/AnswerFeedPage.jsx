import { PostHeader, FeedCard } from 'components';
import messages from 'assets/icon/messages.svg';
import LogoImg from 'assets/icon/edit.svg';
import * as Styled from './StyleFeedPage';

const AnswerFeedPage = () => {
  return (
    <>
      <PostHeader src={LogoImg} name={'ddd'} />
      <Styled.MainContainer>
        <Styled.ButtonContainer>
          <Styled.DeleteButton>삭제하기</Styled.DeleteButton>
        </Styled.ButtonContainer>
        <Styled.CardContiner>
          <Styled.CountContainer>
            <Styled.CountIcon src={messages} />
            <Styled.CountContent>3개의 질문이 있습니다.</Styled.CountContent>
          </Styled.CountContainer>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </Styled.CardContiner>
      </Styled.MainContainer>
    </>
  );
};

export default AnswerFeedPage;
