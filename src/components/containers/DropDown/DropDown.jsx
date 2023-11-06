import { useState } from 'react';
import { ReactComponent as ArrowDown } from 'assets/icon/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'assets/icon/arrow-up.svg';
import { DropDownList } from 'components';
import * as Styled from './StyleDropDown';

function DropDown({ sort, setSort }) {
  const [isOpen, setIsOpen] = useState('false');

  //드롭다운 버튼 클릭
  const handleDropDownClick = () => {
    if (isOpen === 'false') setIsOpen('true');
    else setIsOpen('false');
  };

  //드롭다운 리스트 중 하나 선택
  const handleNameClick = () => {
    setSort('name');
    setIsOpen('false');
  };

  const handleNewestClick = () => {
    setSort('time');
    setIsOpen('false');
  };

  return (
    <Styled.Container>
      <Styled.Div onClick={handleDropDownClick} status={isOpen}>
        {sort === 'time' ? '최신순' : '이름순'}
        {isOpen === 'true' ? (
          <ArrowUp width="14" height="14" fill="var(--gray60)" />
        ) : (
          <ArrowDown width="14" height="14" fill="var(--gray40)" />
        )}
      </Styled.Div>
      {isOpen === 'true' && (
        <DropDownList
          onNameClick={handleNameClick}
          onNewestClick={handleNewestClick}
          sort={sort}
        />
      )}
    </Styled.Container>
  );
}

export default DropDown;
