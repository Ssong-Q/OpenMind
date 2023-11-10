import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PostHeader, ModalLoading, FeedCardSection } from 'components';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleAnswerFeedPage';

const OFFSET = 0;

const AnswerFeedPage = () => {
  const location = useLocation();
  const subjectId = location.pathname.split('/')[2];
  const target = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [total, setTotal] = useState(null);
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  const handleFeedCardSection = async (...args) => {
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

  const observeOptions = {
    threshold: 0.6,
  };

  const observeCallback = () => {
    if (isLoading) return;
    setLimit((prev) => prev + 1);
  };

  const observer = new IntersectionObserver(observeCallback, observeOptions);

  useEffect(() => {
    handleFeedCardSection(subjectId, limit, OFFSET);
  }, [location, limit, total]);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  return (
    <>
      <PostHeader subjectId={subjectId} />
      <Styled.MainContainer>
        <FeedCardSection
          total={total}
          data={questionData.data}
          setLimit={setLimit}
        />
        <Styled.ObserveTargetBox ref={target} />
        {isLoading && <ModalLoading back="noBG" />}
      </Styled.MainContainer>
    </>
  );
};

export default AnswerFeedPage;
