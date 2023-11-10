import { ProfileImage } from 'components';
import { timeForToday } from 'utils/moment';
import * as Styled from './StyleAnswerForm';

const AnswerForm = ({ subjectImg, subjectName, data }) => {
  const { content, isRejected, createdAt } = data;
  return (
    <Styled.AnswerContainer>
      <ProfileImage src={subjectImg} size="mediumSmall" />
      <Styled.AnswerBox>
        <Styled.AnswerProfile>
          <Styled.AnswerName>{subjectName}</Styled.AnswerName>
          <Styled.AnswerDate>{timeForToday(createdAt)}</Styled.AnswerDate>
        </Styled.AnswerProfile>
        {isRejected ? (
          <Styled.RefuseContent>답변 거절</Styled.RefuseContent>
        ) : (
          <Styled.AnswerContent>{content}</Styled.AnswerContent>
        )}
      </Styled.AnswerBox>
    </Styled.AnswerContainer>
  );
};

export default AnswerForm;
