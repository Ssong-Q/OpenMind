import { useState } from 'react';
import { InputTextArea, ProfileImage } from 'components';
import { postSubjectsQuestion } from 'api/api';
import * as Styled from './StyleWriteQuestion';

const WriteQuestionModal = ({
  closeModal,
  subjectData,
  setQuestionData,
  questionData,
  setTotal,
}) => {
  const [subjectName, subjectImg, subjectId] = subjectData;
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const formData = JSON.stringify({ content: `${value}` });
      const response = await postSubjectsQuestion(subjectId, formData);
      if (questionData.data.length) {
        setQuestionData((prevData) => {
          const { data: prevArray } = prevData;
          return { data: [response, ...prevArray] };
        });
      } else {
        setQuestionData({ data: [response] });
        setTotal(1);
      }
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setActive(inputValue.trim() !== '');
  };

  return (
    <>
      <Styled.User>
        <span>To.</span>
        <ProfileImage src={subjectImg} size="xSmall" />
        <span>{subjectName}</span>
      </Styled.User>
      <Styled.Form>
        <InputTextArea onChange={handleInputChange} value={value} />
        <Styled.Button
          onClick={handleButtonClick}
          disabled={!active}
          $active={active}
        >
          {active ? `질문 보내기` : ``}
        </Styled.Button>
      </Styled.Form>
    </>
  );
};

export default WriteQuestionModal;
