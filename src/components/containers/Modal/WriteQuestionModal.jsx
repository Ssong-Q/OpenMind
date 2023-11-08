import { useState } from 'react';
import ModalPortal from 'Portal';
import { InputTextArea, ModalQuestionTitle } from 'components';
import { postSubjectsQuestion } from 'api/api';
import { StyledGlobal } from 'style/StyleGlobal';
import * as Style from './Modal';
import randomImg from 'assets/profile-image.svg';

const WriteQuestionModal = ({ onClose, name = '뉴진스', id = 80 }) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault;
    const formData = JSON.stringify({ content: `${value}` });
    const response = await postSubjectsQuestion(id, formData);
    console.log(response)
    /*try{
      const{subjectId, content} = response;
      getCreateForm(subjectId, content);
    }catch(error){
      setActive(true)imageSource={randomImg},
    }*/
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setActive(inputValue.trim() !== '');
  };

  const handleButtonClick = (e) => {
    e.preventDefault;
  };

  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Style.ModalBackground onClick={handleClose} />
        <Style.Container>
          <ModalQuestionTitle onClick={handleClose} />
          <Style.User>
            <span>To.</span>
            <img src={randomImg} />
            <span>{name}</span>
          </Style.User>
          <Style.Form onSubmit={handleSubmit}>
            <InputTextArea onChange={handleInputChange} value={value} />
            <Style.Button
              type="submit"
              onClick={handleButtonClick}
              disabled={!active}
              $active={active}
            >
              질문 보내기
            </Style.Button>
          </Style.Form>
        </Style.Container>
      </ModalPortal>
    </>
  );
};

export default WriteQuestionModal;
