import { useRef, useState, useEffect } from 'react';
import * as Style from './StyleInputImage';

function InputImage({ name, value, onChange }) {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  useEffect(() => {
    if (value && typeof value !== 'string') {
      const nextPreview = URL.createObjectURL(value);
      setPreview(nextPreview);
    } else if (typeof value === 'string'){
      setPreview(value);
    } else{
      setPreview(null)
    }
    return () => {
      if (preview && typeof value !== 'string') {
        URL.revokeObjectURL(preview);
      }
    };

  }, [value]);

  return (
    <Style.Container>
      <label htmlFor='file-input' ><img src={preview} alt="이미지 미리보기" /></label>
      <input
        id='file-input'
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
    </Style.Container>
  );
}

export default InputImage;
