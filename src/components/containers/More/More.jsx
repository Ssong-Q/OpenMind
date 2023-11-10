import { useState } from 'react';
import { deleteQuestion, deleteAnswer, postAnswer } from 'api/api';
import MoreMenu from '../../common/DropDownList/MoreMenu';
import * as Styled from './StyleMore';

export default function More({ answerId, setAnswer, questionId, isRejected }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleDeleteQuestion = async (id) => {
    await deleteQuestion(id);
  };

  const handleDeleteAnswer = async (id) => {
    await deleteAnswer(id);
    setAnswer(null);
  };

  const handleRejectAnswer = async (id) => {
    try {
      const formData = JSON.stringify({
        content: 'reject',
        isRejected: true,
      });
      await postAnswer(id, formData);
      setAnswer();
    } catch (err) {
      console.log(err);
    }
    console.log(id);
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
            isRejected,
            handleDeleteQuestion,
            handleDeleteAnswer,
            handleRejectAnswer,
          ]}
        />
      )}
    </Styled.Container>
  );
}
