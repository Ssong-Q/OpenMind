import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Styled from './StylePageButton';
import getPageArray from './getPageArray';

const Pagination = ({ total, onClick, limit, width }) => {
  const location = useLocation();
  const pageNum = location.pathname.split('/')[2];
  const [num, setNum] = useState(+pageNum);
  const TOTAL_PAGE = Math.ceil(total / limit);
  let pageArr = [];
  for (let i = 1; i <= TOTAL_PAGE; i++) {
    pageArr.push(i);
  }

  let arrLen = width > 767 ? 7 : 5;
  let midArr = getPageArray(arrLen, pageArr, pageNum);

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
      {midArr[0] !== 1 && (
        <>
          <Link to={`/list/${1}`}>
            <Styled.PageButton>1</Styled.PageButton>
          </Link>
          <Styled.PageDot>...</Styled.PageDot>
        </>
      )}
      {midArr.map((item, index) => {
        return (
          <Link to={`/list/${item}`} key={index}>
            <Styled.PageButton
              onClick={() => handleButtonClick(item)}
              $select={num === item ? 'selected' : 'unselected'}
            >
              {String(item)}
            </Styled.PageButton>
          </Link>
        );
      })}
      {midArr[midArr.length - 1] !== TOTAL_PAGE && (
        <>
          <Styled.PageDot>...</Styled.PageDot>
          <Link to={`/list/${TOTAL_PAGE}`}>
            <Styled.PageButton>{TOTAL_PAGE}</Styled.PageButton>
          </Link>
        </>
      )}
    </Styled.PaginationBox>
  );
};

export default Pagination;
