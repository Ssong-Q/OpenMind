import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowDown } from 'assets/icon/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'assets/icon/arrow-up.svg';
import { DropDownList } from 'components';
import * as Styled from './StyleDropDown';

function DropDown({ offset, limit, sorted }) {
  const divRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState('false');

  //드롭다운 버튼 클릭
  const handleDropDownClick = () => {
    if (isOpen === 'false') setIsOpen('true');
    else setIsOpen('false');
  };

  //드롭다운 리스트 중 하나 선택
  const handleNameClick = () => {
    setIsOpen('false');
    navigate(`/list/${Math.floor(offset / limit) + 1}/name`);
  };

  const handleNewestClick = () => {
    setIsOpen('false');
    navigate(`/list/${Math.floor(offset / limit) + 1}/time`);
  };

  const handleOutsideClick = (e) => {
    if (e.target !== divRef.current) {
      setIsOpen('false');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <Styled.Container>
      <Styled.Div onClick={handleDropDownClick} $status={isOpen} ref={divRef}>
        {sorted === 'time' ? '최신순' : '이름순'}
        {isOpen === 'true' ? (
          <ArrowUp width="14" height="14" fill="var(--gray60)" />
        ) : (
          <ArrowDown
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen('true');
            }}
            width="14"
            height="14"
            fill="var(--gray40)"
          />
        )}
      </Styled.Div>
      {isOpen === 'true' && (
        <DropDownList
          onNameClick={handleNameClick}
          onNewestClick={handleNewestClick}
          sorted={sorted}
        />
      )}
    </Styled.Container>
  );
}

export default DropDown;
