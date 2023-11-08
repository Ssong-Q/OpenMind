import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PostHeader, ModalLoading, FeedCardSection } from 'components';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleAnswerFeedPage';

const AnswerFeedPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  const handleFreeCardSection = async (...args) => {
    setIsLoading(true);
    try {
      const result = await getSubjectsQuestion(...args);
      const { count, results: questionData } = result;
      setQuestionData((prevData) => ({
        ...prevData,
        data: questionData,
      }));
      setTotal(count);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const subjectId = location.pathname.split('/')[2];
    handleFreeCardSection(subjectId, limit, offset);
  }, [location, limit, offset, total]);

  console.log(setOffset);
  console.log(setLimit);

  return (
    <>
      <PostHeader />
      <Styled.MainContainer>
        <Styled.ButtonContainer>
          <Styled.DeleteButton>삭제하기</Styled.DeleteButton>
        </Styled.ButtonContainer>
        <FeedCardSection total={total} data={questionData.data} />
        {isLoading && <ModalLoading />}
      </Styled.MainContainer>
    </>
  );
};

export default AnswerFeedPage;
