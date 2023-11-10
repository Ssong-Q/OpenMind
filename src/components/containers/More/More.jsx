import { useState } from 'react';
import { deleteQuestion, deleteAnswer, postAnswer } from 'api/api';
import MoreMenu from '../../common/DropDownList/MoreMenu';
import * as Styled from './StyleMore';

export default function More({
  answerId,
  setAnswer,
  questionId,
  isRejected,
  setTotal,
  setQuestionData,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(isOpen ? false : true);
  };

  const handleDeleteQuestion = async (id) => {
    await deleteQuestion(id);
    setTotal((prevTotal) => prevTotal - 1);
    setQuestionData((prevData) => ({
      data: prevData.data.filter((question) => question.id !== questionId),
    }));
  };

  const handleDeleteAnswer = async (id) => {
    await deleteAnswer(id);
    setAnswer(null);
  };

  const handleRejectAnswer = async (id) => {
    try {
      const formData = JSON.stringify({
        content: 'rejected',
        isRejected: true,
      });
      await postAnswer(id, formData);
      setAnswer('reject');
    } catch (err) {
      console.log(err);
    }
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
