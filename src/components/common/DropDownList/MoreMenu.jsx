import { useState } from 'react';
import * as Styled from './StyleDropDownList';

function MoreList({ onClick }) {
  const [select, setSelect] = useState('');

  const list = [
    { key: 1, value: '답변 거절', type: 'reject' },
    { key: 2, value: '답변 삭제', type: 'delete' },
    { key: 3, value: '질문 삭제', type: 'delete' },
  ];

  console.log(select);

  return (
    <Styled.Ul type="more" onClick={onClick}>
      {list.map((item) => {
        return (
          <li key={item.key}>
            <Styled.Button
              type={item.type}
              onClick={() => {
                setSelect(item.value);
              }}
            >
              {item.value}
            </Styled.Button>
          </li>
        );
      })}
    </Styled.Ul>
  );
}

export default MoreList;
