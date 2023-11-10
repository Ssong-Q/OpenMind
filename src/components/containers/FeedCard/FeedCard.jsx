import {
  IncompleteBadge,
  CompleteBadge,
  ThumbsDownButton,
  ThumbsUpButton,
  ProfileImage,
} from 'components';
import { timeForToday } from 'utils/moment';
import * as Styled from './StyleFeedCard';

const FeedCard = ({ data, subjectData }) => {
  const { id: questionId, content, like, dislike, createdAt, answer } = data;
  const [subjectName, subjectImg] = subjectData;

  return (
    <Styled.CardContainer>
      <Styled.Header>
        {answer ? <CompleteBadge /> : <IncompleteBadge />}
      </Styled.Header>
      <Styled.Question>
        {/* 질문 생성시간 */}
        <Styled.QuestionTime>
          질문 · {timeForToday(createdAt)}
        </Styled.QuestionTime>
        <Styled.QuestionContent>{content}</Styled.QuestionContent>
      </Styled.Question>
      {answer ? (
        <Styled.AnswerContainer>
          <ProfileImage src={subjectImg} />
          <Styled.AnswerBox>
            <Styled.AnswerProfile>
              <Styled.AnswerName>{subjectName}</Styled.AnswerName>
              {/* 답변 시간 */}
              <Styled.AnswerDate>
                {timeForToday(answer['createdAt'])}
              </Styled.AnswerDate>
            </Styled.AnswerProfile>
            {answer['isRejected'] ? (
              <Styled.RefuseContent>답변 거절</Styled.RefuseContent>
            ) : (
              <Styled.AnswerContent>{answer['content']}</Styled.AnswerContent>
            )}
          </Styled.AnswerBox>
        </Styled.AnswerContainer>
      ) : null}
      <Styled.Footer>
        <Styled.FooterIcons>
          <Styled.FooterIconContainer>
            <ThumbsUpButton number={like} questionId={questionId} />
          </Styled.FooterIconContainer>
          <Styled.FooterIconContainer>
            <ThumbsDownButton number={dislike} questionId={questionId} />
          </Styled.FooterIconContainer>
        </Styled.FooterIcons>
      </Styled.Footer>
    </Styled.CardContainer>
  );
};

export default FeedCard;
