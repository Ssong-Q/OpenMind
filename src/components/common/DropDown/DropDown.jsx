import * as Styled from './StyleDropDown';
import { ReactComponent as ArrowDown } from 'assets/icon/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'assets/icon/arrow-up.svg';
import { useState } from 'react';
import PopOverSort from '../PopOverSort/PopOverSort';

function DropDown() {
  const [isOpen, setIsOpen] = useState('false');
  const [sort, setSort] = useState('이름순');

  //드롭다운 버튼 클릭
  const handleDropDownClick = () => {
    if (isOpen === 'false') setIsOpen('true');
    else setIsOpen('false');
  };

  //드롭다운 리스트 중 하나 선택
  const handleNameClick = () => {
    setSort('이름순');
    setIsOpen('false');
  };

  const handleNewestClick = () => {
    setSort('최신순');
    setIsOpen('false');
  };

  return (
    <>
      <Styled.Div onClick={handleDropDownClick} status={isOpen}>
        {sort}
        {isOpen === 'true' ? (
          <ArrowUp width="14" height="14" fill="var(--gray60)" />
        ) : (
          <ArrowDown width="14" height="14" fill="var(--gray40)" />
        )}
      </Styled.Div>
      {isOpen === 'true' && (
        <PopOverSort
          onNameClick={handleNameClick}
          onNewestClick={handleNewestClick}
          sort={sort}
        />
      )}
    </>
  );
}

export default DropDown;
