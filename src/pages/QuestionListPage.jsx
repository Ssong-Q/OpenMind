import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  NavBar,
  DropDown,
  UserCardSection,
  Pagination,
  ModalLoading,
  Modal,
  CheckAccount,
} from 'components';
import { getSubjects } from 'api/api';
import useWindowSizeCustom from 'hooks/useWindowSize';
import useModal from 'hooks/useModal';
import { checkLocalStorage } from 'utils/localStorage';
import * as Styled from './StyleQuestionListPage';

const QuestionListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sorted = location.pathname.split('/')[3];
  const { width: browserWidth } = useWindowSizeCustom();
  const { isOpen, closeModal, openModal } = useModal();
  const option = { center: true, smallContainer: true };
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
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
      console.error(err);
      navigate('/FailToLoadData');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLimitChange = useCallback(() => {
    if (!browserWidth) return;
    if (browserWidth >= 910) {
      setLimit(8);
    } else {
      setLimit(6);
    }
  }, [browserWidth]);

  const handleNavClick = () => {
    if (checkLocalStorage()) {
      openModal(true);
    } else {
      navigate('/');
    }
  };

  const handleRedirect = (queryString) => {
    if (queryString.trim() !== 'name' && queryString.trim() !== 'time') {
      navigate(`/${queryString}`);
    }
  };

  useEffect(() => {
    handleRedirect(sorted);
    handleCardSection(null, limit, offset, sorted);
  }, [location, offset, limit]);

  useEffect(() => {
    handleLimitChange();
  }, [handleLimitChange]);

  return (
    <>
      <Styled.PageContainer>
        <NavBar onClick={handleNavClick}>답변하러 가기</NavBar>
        <Styled.cardSectionContainer>
          <Styled.ListPageHeaderBox>
            <Styled.ListPageHeader>누구에게 질문할까요?</Styled.ListPageHeader>
            <DropDown offset={offset} limit={limit} sorted={sorted} />
          </Styled.ListPageHeaderBox>
          <UserCardSection data={subjectData.data} />
          {isLoading || (
            <Pagination
              total={total}
              onClick={setOffset}
              limit={limit}
              width={browserWidth}
              sorted={sorted}
            />
          )}
        </Styled.cardSectionContainer>
        {isOpen && (
          <Modal
            title="계정이 있으신가요?"
            trigger={<CheckAccount />}
            option={option}
            closeModal={closeModal}
          />
        )}
        {isLoading && <ModalLoading />}
      </Styled.PageContainer>
    </>
  );
};

export default QuestionListPage;
