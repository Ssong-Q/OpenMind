import { useState } from 'react';
import { ProfileImage, InputTextArea } from 'components';
import * as Styled from './StyleAnswerForm';

const AnswerInputForm = ({
  // isModify,
  setIsModify,
  subjectImg,
  subjectName,
}) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleButtonClick = () => {
    setIsModify(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setActive(inputValue.trim() !== '');
  };

  return (
    <Styled.AnswerContainer>
      <ProfileImage src={subjectImg} />
      <Styled.AnswerBox>
        <Styled.AnswerProfile>
          <Styled.AnswerName>{subjectName}</Styled.AnswerName>
        </Styled.AnswerProfile>
        <Styled.Form>
          <InputTextArea onChange={handleInputChange} value={value} />
          <Styled.Button
            onClick={handleButtonClick}
            disabled={!active}
            $active={active}
          >
            답변 완료
          </Styled.Button>
        </Styled.Form>
      </Styled.AnswerBox>
    </Styled.AnswerContainer>
  );
};

export default AnswerInputForm;
