import { useState, useEffect } from 'react';
import { ProfileImage, InputTextArea } from 'components';
import { postAnswer, putAnswer } from 'api/api';
import * as Styled from './StyleAnswerForm';

const AnswerInputForm = ({ data }) => {
  const [
    isModify,
    setIsModify,
    subjectImg,
    subjectName,
    questionId,
    answer,
    setAnswer,
  ] = data;
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = JSON.stringify({
        content: `${value}`,
        isRejected: 'false',
      });
      // 현재 답변이 있는 상황, 없는 상황에 따라 put,post로 나눔
      if (!answer) {
        const result = await postAnswer(questionId, formData);
        setAnswer(result);
      } else {
        const result = await putAnswer(answer.id, formData);
        setAnswer((prev) => ({
          ...prev,
          ...result,
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      // 수정 중인 상태를 종료 시킴
      setIsModify(false);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setActive(inputValue.trim() !== '');
  };

  useEffect(() => {
    // 수정 중일 때는 input form에 답변을 미리 입력시켜 놓음
    if (isModify) {
      setValue(answer.content);
    }
  }, []);

  return (
    <Styled.AnswerContainer>
      <ProfileImage src={subjectImg} size="mediumSmall" />
      <Styled.AnswerBox>
        <Styled.AnswerProfile>
          <Styled.AnswerName>{subjectName}</Styled.AnswerName>
        </Styled.AnswerProfile>
        <Styled.Form onSubmit={handleSubmit}>
          <InputTextArea onChange={handleInputChange} value={value} />
          <Styled.Button disabled={!active} $active={active}>
            {active ? (isModify ? `수정 완료` : `답변 완료`) : ``}
          </Styled.Button>
        </Styled.Form>
      </Styled.AnswerBox>
    </Styled.AnswerContainer>
  );
};

export default AnswerInputForm;
