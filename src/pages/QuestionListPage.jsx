import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar, ModalListPage } from 'components';
import { checkLocalStorage } from 'utils/function';

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

      {isAnsModal && <ModalListPage onClose={setIsAnsModal} />}
    </>
  );
};

export default QuestionListPage;
