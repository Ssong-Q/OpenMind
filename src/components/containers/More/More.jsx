import { useState } from 'react';
import MoreMenu from '../../common/DropDownList/MoreMenu';
import * as Styled from './StyleMore';

export default function More() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <Styled.Container>
      <button onClick={handleOnClick}>
        <Styled.Kebab />
      </button>
      {isOpen && <MoreMenu onClick={handleOnClick} />}
    </Styled.Container>
  );
}
