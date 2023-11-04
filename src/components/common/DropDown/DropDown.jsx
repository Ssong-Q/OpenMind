import * as Styled from './StyleDropDown';
import { ReactComponent as ArrowDown } from 'assets/icon/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'assets/icon/arrow-up.svg';
import { useState } from 'react';

function DropDown() {
  const [isOpen, setIsOpen] = useState('false');

  const handleClick = () => {
    if (isOpen === 'false') setIsOpen('true');
    else setIsOpen('false');
  };

  //임시 name 속성
  const name = '이름순';

  return (
    <Styled.Div onClick={handleClick} status={isOpen}>
      {name}
      {isOpen === 'true' ? (
        <ArrowUp width="14" height="14" fill="var(--gray60)" />
      ) : (
        <ArrowDown width="14" height="14" fill="var(--gray40)" />
      )}
    </Styled.Div>
  );
}

export default DropDown;
