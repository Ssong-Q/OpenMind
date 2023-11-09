import { useState, useEffect } from 'react';
import {
  IncompleteBadge,
  CompleteBadge,
  ButtonEdit,
  ThumbsDownButton,
  ThumbsUpButton,
  AnswerForm,
  AnswerInputForm,
} from 'components';
import { getSubjects } from 'api/api';
import { timeForToday } from 'utils/moment';
import { ReactComponent as More } from 'assets/icon/more.svg';
import * as Styled from './StyleAnswerFeedCard';

function AnswerFeedCard({ data }) {
  const {
    id: questionId,
    subjectId,
    content,
    like,
    dislike,
    createdAt,
    answer: initAnswer,
  } = data;
  const [answer, setAnswer] = useState(initAnswer);
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [isModify, setIsModify] = useState(false);

  const handleSubjectInfo = async () => {
    try {
      const result = await getSubjects(subjectId);
      const { name, imageSource } = result;
      setSubjectName(name);
      setSubjectImg(imageSource);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSubjectInfo();
  }, []);

  const handleModifyClick = () => {
    // 수정하기 버튼 눌렀을 때
    setIsModify(true);
  };

  return (
    <Styled.CardContainer>
      <Styled.Header>
        {answer ? <CompleteBadge /> : <IncompleteBadge />}
        <More />
      </Styled.Header>
      <Styled.Question>
        <Styled.QuestionTime>
          질문 ∙ {timeForToday(createdAt)}
        </Styled.QuestionTime>
        <Styled.QuestionContent>{content}</Styled.QuestionContent>
      </Styled.Question>
      {answer ? ( // 답변이 있다면?
        isModify ? ( // 수정하기 버튼을 누른 상태라면?
          <AnswerInputForm // 수정버튼 누른 상태-> input 폼 보여주기
            data={[
              isModify,
              setIsModify,
              subjectImg,
              subjectName,
              questionId,
              answer,
              setAnswer,
            ]}
          />
        ) : (
          <AnswerForm // 수정버튼 누르지 않은 상태-> 답변 보여주기
            data={answer}
            subjectImg={subjectImg}
            subjectName={subjectName}
          />
        )
      ) : (
        <AnswerInputForm // 미답변 상태라면 input 폼 보여주기
          data={[
            isModify,
            setIsModify,
            subjectImg,
            subjectName,
            questionId,
            answer,
            setAnswer,
          ]}
        />
      )}
      <Styled.Footer>
        <Styled.FooterIcons>
          <Styled.FooterIconContainer>
            <ThumbsUpButton number={like} />
          </Styled.FooterIconContainer>
          <Styled.FooterIconContainer>
            <ThumbsDownButton number={dislike} />
          </Styled.FooterIconContainer>
        </Styled.FooterIcons>
        {/* 답변이 있는 상태 + 답변 거절이 아닐 때 -> 수정하기 버튼 보이기 */}
        {answer && !answer?.isRejected && (
          <ButtonEdit onClick={handleModifyClick} />
        )}
      </Styled.Footer>
    </Styled.CardContainer>
  );
}

export default AnswerFeedCard;
