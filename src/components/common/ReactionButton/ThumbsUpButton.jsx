import { useState } from 'react';
import { postReactionOnQuestion } from 'api/api';
import { ReactComponent as ThumbsUp } from 'assets/icon/thumbs-up.svg';
import * as Style from './StyleThumbsButton';

const ThumbsUpButton = ({ number, questionId }) => {
  const [likeNumber, setLikeNumber] = useState(number);
  const [active, setActive] = useState('false');

  const handleActiveClick = async () => {
    setActive('blue');
    try {
      const formData = JSON.stringify({
        type: 'like',
      });
      const result = await postReactionOnQuestion(questionId, formData);
      setLikeNumber(result.like);
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
      <ThumbsUp fill={active === 'blue' ? 'var(--blue)' : 'var(--gray40)'} />
      <span>좋아요 {likeNumber}</span>
    </Style.Container>
  );
};

export default ThumbsUpButton;
