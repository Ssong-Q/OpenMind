import { useState } from 'react';
import ModalPortal from 'Portal';
import { InputTextArea, ModalQuestionTitle } from 'components';
import { postSubjectsQuestion } from 'api/api';
import { StyledGlobal } from 'style/StyleGlobal';
import * as Styled from './Modal';

const WriteQuestionModal = ({ onClose, name, img, id }) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    console.log(e);
    try {
      const formData = JSON.stringify({ content: `${value}` });
      const response = await postSubjectsQuestion(id, formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
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
        <Styled.ModalBackground onClick={handleClose} />
        <Styled.Container>
          <ModalQuestionTitle onClick={handleClose} />
          <Styled.User>
            <span>To.</span>
            <img src={img} />
            <span>{name}</span>
          </Styled.User>
          <Styled.Form onSubmit={handleSubmit}>
            <InputTextArea onChange={handleInputChange} value={value} />
            <Styled.Button
              type="submit"
              onClick={handleButtonClick}
              disabled={!active}
              $active={active}
            >
              질문 보내기
            </Styled.Button>
          </Styled.Form>
        </Styled.Container>
      </ModalPortal>
    </>
  );
};

export default WriteQuestionModal;
