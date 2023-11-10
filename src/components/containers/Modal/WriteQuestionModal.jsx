import { useState } from 'react';
import ModalPortal from 'Portal';
import { InputTextArea, ModalQuestionTitle, ProfileImage } from 'components';
import { postSubjectsQuestion } from 'api/api';
import { StyledGlobal } from 'style/StyleGlobal';
import * as Styled from './Modal';

const WriteQuestionModal = ({
  onClose,
  subjectData,
  setQuestionData,
  setVisible,
}) => {
  const [subjectName, subjectImg, subjectId] = subjectData;
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleClose = () => {
    onClose(false);
  };

  const handleButtonClick = async () => {
    try {
      const formData = JSON.stringify({ content: `${value}` });
      const response = await postSubjectsQuestion(subjectId, formData);
      setQuestionData((prevData) => {
        const { data: prevArray } = prevData;
        return { data: [response, ...prevArray] };
      });
    } catch (err) {
      console.log(err);
    } finally {
      setVisible(false);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setActive(inputValue.trim() !== '');
  };

  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground onClick={handleClose} />
        <Styled.Container>
          <ModalQuestionTitle onClick={handleClose} />
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
        </Styled.Container>
      </ModalPortal>
    </>
  );
};

export default WriteQuestionModal;
