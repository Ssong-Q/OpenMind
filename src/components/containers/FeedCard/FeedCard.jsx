import {
  IncompleteBadge,
  CompleteBadge,
  ThumbsDownButton,
  ThumbsUpButton,
  ProfileImage,
} from 'components';
import { timeForToday } from 'utils/moment';
import { ReactComponent as More } from 'assets/icon/more.svg';
import * as Styled from './StyleFeedCard';

const FeedCard = ({ data, subjectName, subjectImg }) => {
  const { content, like, dislike, createdAt, answer } = data;

  // //답변에 띄어줄 사용자 데이터 호출
  // const handleSubjectInfo = async () => {
  //   try {
  //     const result = await getSubjects(subjectId);
  //     const { name, imageSource } = result;
  //     setSubjectName(name);
  //     setSubjectImg(imageSource);
  //     console.log(name);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   handleSubjectInfo();
  // }, []);

  return (
    <Styled.CardContainer>
      <Styled.Header>
        {answer ? <CompleteBadge /> : <IncompleteBadge />}
        <More />
      </Styled.Header>
      <Styled.Question>
        {/* 질문 생성시간 */}
        <Styled.QuestionTime>
          질문 · {timeForToday(createdAt)}
        </Styled.QuestionTime>
        <Styled.QuestionContent>{content}</Styled.QuestionContent>
      </Styled.Question>
      {answer !== null ? (
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
            <ThumbsUpButton active={like} />
          </Styled.FooterIconContainer>
          <Styled.FooterIconContainer>
            <ThumbsDownButton active={dislike} />
          </Styled.FooterIconContainer>
        </Styled.FooterIcons>
        {/* <ButtonEdit /> */}
      </Styled.Footer>
    </Styled.CardContainer>
  );
};

export default FeedCard;
