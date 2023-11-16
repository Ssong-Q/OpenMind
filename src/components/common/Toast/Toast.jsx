import { useEffect } from 'react';
import * as Styled from './StyleToast';

export default function Toast({ setStatus, children }) {
  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 5000);
  }, []);

  return <Styled.Toast>{children}</Styled.Toast>;
}
