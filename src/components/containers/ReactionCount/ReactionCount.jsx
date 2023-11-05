import { useState } from 'react';
import * as Style from './StyleReactionCount';
import ThumbsUpButton from 'components/common/ReactionButton/ThumbsUpButton';
import ThumbsDownButton from 'components/common/ReactionButton/ThumbsDownDown';

const ReactionButton = () => {
  const [counting, setCounting] = useState({up : null, down : null});

  const handleCount = (type) => {
    if (!counting[type]) {
      setCounting((prevCounting) => ({ ...prevCounting, [type]: 1 }));
    } else {
      setCounting((prevCounting) => ({ ...prevCounting, [type]: null }));
    }
  };

  return (
    <Style.Container>
      <ThumbsUpButton
        onClick={() => {
          handleCount('up');
        }}
        active={counting.up}
      />
      <ThumbsDownButton
        onClick={() => {
          handleCount('down');
        }}
        active={counting.down}
      />
    </Style.Container>
  );
};

export default ReactionButton;
