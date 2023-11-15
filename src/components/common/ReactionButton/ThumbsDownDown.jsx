import { useState } from 'react';
import { postReactionOnQuestion } from 'api/api';
import { ReactComponent as ThumbsDown } from 'assets/icon/thumbs-down.svg';
import * as Style from './StyleThumbsButton';

const ThumbsDownButton = ({ number, questionId }) => {
  const [dislikeNumber, setDislikeNumber] = useState(number);
  const [active, setActive] = useState('false');

  const handleActiveClick = async () => {
    setActive('red');
    try {
      const formData = JSON.stringify({
        type: 'dislike',
      });
      const result = await postReactionOnQuestion(questionId, formData);
      setDislikeNumber(result.dislike);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setActive('false');
      }, 300);
    }
  };

  return (
    <Style.Container $active={active} onClick={handleActiveClick}>
      <ThumbsDown fill={active === 'red' ? 'var(--red)' : 'var(--gray40)'} />
      <span>싫어요 {dislikeNumber}</span>
    </Style.Container>
  );
};

export default ThumbsDownButton;
