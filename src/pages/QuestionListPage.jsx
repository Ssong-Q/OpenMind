import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar, ModalListPage, DropDown } from 'components';
import { checkLocalStorage } from 'utils/function';
import * as Styled from './StyleQuestionListPage';

const QuestionListPage = () => {
  const navigate = useNavigate();
  const [isAnsModal, setIsAnsModal] = useState(false);

  const handleNavClick = () => {
    if (checkLocalStorage()) {
      setIsAnsModal(true);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <NavBar onClick={handleNavClick}>답변하러 가기</NavBar>
      <Styled.cardSectionContainer>
        <Styled.ListPageHeader>누구에게 질문할까요?</Styled.ListPageHeader>
        <DropDown />
        <Styled.cardSectionBox></Styled.cardSectionBox>
      </Styled.cardSectionContainer>
      {isAnsModal && <ModalListPage onClose={setIsAnsModal} />}
    </>
  );
};

export default QuestionListPage;
