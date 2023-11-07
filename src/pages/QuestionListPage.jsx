import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavBar,
  ModalListPage,
  DropDown,
  UserCardSection,
  Pagination,
  ModalLoading,
} from 'components';
import { getSubjects } from 'api/api';
import { useWindowSizeCustom } from 'hooks/useWindowSize';
import { checkLocalStorage } from 'utils/localStorage';
import * as Styled from './StyleQuestionListPage';

const QuestionListPage = () => {
  const navigate = useNavigate();
  const { width: browserWidth } = useWindowSizeCustom();
  const [isAnsModal, setIsAnsModal] = useState(false);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState('time');
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subjectData, setSubjectData] = useState({
    data: [],
  });

  const handleCardSection = async (...args) => {
    setIsLoading(true);
    try {
      const [result, total] = await Promise.all([
        getSubjects(...args),
        getSubjects(null, 9999, 0),
      ]);
      const { results: subjectData } = result;
      const { count } = total;
      setSubjectData((prevData) => ({
        ...prevData,
        data: subjectData,
      }));
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLimitChange = useCallback(() => {
    if (browserWidth >= 910) {
      setLimit(8);
    } else {
      setLimit(6);
    }
  }, [browserWidth]);

  const handleNavClick = () => {
    if (checkLocalStorage()) {
      setIsAnsModal(true);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    handleCardSection(null, limit, offset, sort);
  }, [offset, sort, limit]);

  useEffect(() => {
    handleLimitChange();
  }, [handleLimitChange]);

  return (
    <Styled.PageContainer>
      <NavBar onClick={handleNavClick}>답변하러 가기</NavBar>
      <Styled.cardSectionContainer>
        <Styled.ListPageHeaderBox>
          <Styled.ListPageHeader>누구에게 질문할까요?</Styled.ListPageHeader>
          <DropDown sort={sort} setSort={setSort} />
        </Styled.ListPageHeaderBox>
        <UserCardSection data={subjectData.data} />
        <Pagination total={total} onClick={setOffset} limit={limit} />
      </Styled.cardSectionContainer>
      {isAnsModal && <ModalListPage onClose={setIsAnsModal} />}
      {isLoading && <ModalLoading />}
    </Styled.PageContainer>
  );
};

export default QuestionListPage;
