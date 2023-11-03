import { useState } from 'react';
import * as Styled from './StyleInputField';

const InputField = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(!isFocused);
  };

  const handleInputBlur = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Styled.InputFieldBox isFocused={isFocused}>
      <Styled.PersonImg />
      <Styled.InputField
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="이름을 입력하세요"
      />
    </Styled.InputFieldBox>
  );
};

export default InputField;
