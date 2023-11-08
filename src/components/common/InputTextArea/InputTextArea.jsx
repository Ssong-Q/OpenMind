import { useState } from 'react';
import * as Styled from './StyleInputTextArea.js';

const InputTextArea = ({ value, onChange }) => {
  const [focused, setFocused] = useState('false');

  const handleInputFocus = () => {
    setFocused('true');
  };

  const handleInputBlur = () => {
    setFocused('false');
  };

  return (
    <Styled.InputTextArea
      $focused={focused}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      placeholder="질문을 입력해주세요"
      onChange={onChange}
      value={value}
    />
  );
};

export default InputTextArea;
