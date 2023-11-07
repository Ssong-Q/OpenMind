import { useState } from 'react';
import * as Styled from './StylePageButton';

const Pagination = ({ total, onClick, limit }) => {
  const [num, setNum] = useState(1);
  const TOTAL_PAGE = Math.ceil(total / limit);
  let pageArr = [];
  for (let i = 1; i <= TOTAL_PAGE; i++) {
    pageArr.push(i);
  }

  const handleButtonClick = (num) => {
    onClick(limit * (num - 1));
    setNum(num);
  };

  return (
    <Styled.PaginationBox>
      {pageArr.map((item, index) => {
        return (
          <Styled.PageButton
            key={index}
            onClick={() => handleButtonClick(item)}
            select={num === item ? 'selected' : 'unselected'}
          >
            {String(item)}
          </Styled.PageButton>
        );
      })}
    </Styled.PaginationBox>
  );
};

export default Pagination;
