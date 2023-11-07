import { useState } from 'react';
import { PostHeader, FeedCard } from 'components';
import messages from 'assets/icon/messages.svg';
import LogoImg from 'assets/icon/edit.svg';
import * as Styled from './StyleFeedPage';

const QuestionFeedPage = () => {
  //complete인 경우: 답변완료 배지, content띄어줌/ refuse인 경우: 답변완료 배지, 답변 거절 문구/incomplete: 미답변 배지, content 빈 칸
  const [isDone, setIsDone] = useState('complete'); //refuse, complete, incomplete
  //추후 api통신 이후, 아래의 함수 변경
  const handleWriteQuestion = () => {
    setIsDone('refuse');
  };
  return (
    <>
      <PostHeader src={LogoImg} name={'ddd'} />
      <Styled.MainContainer>
        <Styled.CardContiner>
          <Styled.CountContainer>
            <Styled.CountIcon src={messages} />
            <Styled.CountContent>3개의 질문이 있습니다.</Styled.CountContent>
          </Styled.CountContainer>
          <FeedCard isDone={isDone} />
          <FeedCard isDone={isDone} />
          <FeedCard isDone={isDone} />
        </Styled.CardContiner>
        {/* setIsDone 미사용 오류 해결을 위해 임으로 onClick함수 추가 */}
        <Styled.WriteButton onClick={handleWriteQuestion}>
          질문 작성하기
        </Styled.WriteButton>
      </Styled.MainContainer>
    </>
  );
};

export default QuestionFeedPage;
