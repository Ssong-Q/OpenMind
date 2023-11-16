import { useState } from 'react';
import * as Styled from './StyleInputField';

const InputField = ({ onChange }) => {
  const [isFocused, setIsFocused] = useState('false');

  const handleInputFocus = () => {
    setIsFocused('true');
  };

  const handleInputBlur = () => {
    setIsFocused('false');
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Styled.InputFieldBox $focused={isFocused}>
      <Styled.PersonImg />
      <Styled.InputField
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        placeholder="닉네임을 입력하세요"
      />
    </Styled.InputFieldBox>
  );
};

export default InputField;
