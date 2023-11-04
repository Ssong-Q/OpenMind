import { useState } from 'react';
import * as Styled from './StylePopOverSort';

function PopOverSort() {
  const [sort, setSort] = useState('이름순');

  const handleNameClick = () => {
    setSort('이름순');
  };

  const handleNewestClick = () => {
    setSort('최신순');
  };

  return (
    <Styled.Container>
      <Styled.Button onClick={handleNameClick} select={sort === '이름순'}>
        이름순
      </Styled.Button>
      <Styled.Button onClick={handleNewestClick} select={sort === '최신순'}>
        최신순
      </Styled.Button>
    </Styled.Container>
  );
}

export default PopOverSort;
