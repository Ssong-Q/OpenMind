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
  const { subjectId, content, like, dislike, createdAt, answer } = data;
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
      {answer ? (
        isModify ? (
          <AnswerInputForm
            isModify={isModify}
            setIsModify={setIsModify}
            subjectImg={subjectImg}
            subjectName={subjectName}
          />
        ) : (
          <AnswerForm
            data={answer}
            subjectImg={subjectImg}
            subjectName={subjectName}
          />
        )
      ) : (
        <AnswerInputForm
          isModify={isModify}
          setIsModify={setIsModify}
          subjectImg={subjectImg}
          subjectName={subjectName}
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
        {answer && <ButtonEdit onClick={handleModifyClick} />}
      </Styled.Footer>
    </Styled.CardContainer>
  );
}

export default AnswerFeedCard;
