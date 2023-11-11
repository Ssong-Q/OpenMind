import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Styled from './StylePageButton';

const Pagination = ({ total, onClick, limit }) => {
  const location = useLocation();
  const pageNum = location.pathname.split('/')[2];
  const [num, setNum] = useState(+pageNum);
  const TOTAL_PAGE = Math.ceil(total / limit);
  let pageArr = [];
  for (let i = 1; i <= TOTAL_PAGE; i++) {
    pageArr.push(i);
  }

  const handleButtonClick = (num) => {
    onClick(limit * (num - 1));
    setNum(num);
  };

  useEffect(() => {
    onClick(limit * (Number(pageNum) - 1));
    setNum(+pageNum);
  }, [location]);

  return (
    <Styled.PaginationBox>
      {pageArr.map((item, index) => {
        return (
          <Link to={`/list/${item}`} key={index}>
            <Styled.PageButton
              onClick={() => handleButtonClick(item)}
              select={num === item ? 'selected' : 'unselected'}
            >
              {String(item)}
            </Styled.PageButton>
          </Link>
        );
      })}
    </Styled.PaginationBox>
  );
};

export default Pagination;
