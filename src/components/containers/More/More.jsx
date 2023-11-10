import { useState } from 'react';
import { deleteSubjectsQuestion } from 'api/api';
import MoreMenu from '../../common/DropDownList/MoreMenu';
import * as Styled from './StyleMore';

export default function More({ isAnswer, questionId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleDeleteQuestion = (id) => {
    deleteSubjectsQuestion(id);
    console.log('deleted: ' + id);
  };

  return (
    <Styled.Container>
      <button onClick={handleOnToggle}>
        <Styled.Kebab />
      </button>
      {isOpen && (
        <MoreMenu
          onClose={handleOnToggle}
          data={[questionId, isAnswer, handleDeleteQuestion]}
        />
      )}
    </Styled.Container>
  );
}
