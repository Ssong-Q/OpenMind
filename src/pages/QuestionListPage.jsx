import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavBar,
  ModalListPage,
  DropDown,
  UserCardSection,
  Pagination,
} from 'components';
import { getSubjects } from 'api/api';
import { checkLocalStorage } from 'utils/function';
import * as Styled from './StyleQuestionListPage';

const LIMIT = 8;

const QuestionListPage = () => {
  const navigate = useNavigate();
  const [isAnsModal, setIsAnsModal] = useState(false);
  const [offset, setOffset] = useState(0);
  const [sort, setSort] = useState('time');
  const [subjectData, setSubjectData] = useState({
    data: [],
  });

  const handleCardSection = async (...args) => {
    try {
      const result = await getSubjects(...args);
      const { results: subjectData } = result;
      setSubjectData((prevData) => ({
        ...prevData,
        data: subjectData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavClick = () => {
    if (checkLocalStorage()) {
      setIsAnsModal(true);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    handleCardSection(null, LIMIT, offset, sort);
  }, [offset, sort]);

  return (
    <Styled.PageContainer>
      <NavBar onClick={handleNavClick}>답변하러 가기</NavBar>
      <Styled.cardSectionContainer>
        <Styled.ListPageHeader>누구에게 질문할까요?</Styled.ListPageHeader>
        <DropDown sort={sort} setSort={setSort} />
        <UserCardSection data={subjectData.data} />
        <Pagination onClick={setOffset} />
      </Styled.cardSectionContainer>
      {isAnsModal && <ModalListPage onClose={setIsAnsModal} />}
    </Styled.PageContainer>
  );
};

export default QuestionListPage;
