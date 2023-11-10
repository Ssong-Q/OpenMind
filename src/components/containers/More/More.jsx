import { useState } from 'react';
import { deleteQuestion, deleteAnswer } from 'api/api';
import MoreMenu from '../../common/DropDownList/MoreMenu';
import * as Styled from './StyleMore';

export default function More({ answerId, setAnswer, questionId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleDeleteQuestion = (id) => {
    deleteQuestion(id);
  };

  const handleDeleteAnswer = (id) => {
    deleteAnswer(id);
    setAnswer(null);
  };

  return (
    <Styled.Container>
      <button onClick={handleOnToggle}>
        <Styled.Kebab />
      </button>
      {isOpen && (
        <MoreMenu
          onClose={handleOnToggle}
          data={[
            questionId,
            answerId,
            handleDeleteQuestion,
            handleDeleteAnswer,
          ]}
        />
      )}
    </Styled.Container>
  );
}
