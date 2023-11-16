import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostHeader, ModalLoading, FeedCardSection } from 'components';
import { checkLocalStorageById } from 'utils/localStorage';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const LIMIT = 3;

const AnswerFeedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const target = useRef();
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const option = { filter: true };

  const handleFeedCardSection = async (id, limit, offset) => {
    setIsLoading(true);
    try {
      const result = await getSubjectsQuestion(id, limit, offset.current);
      const { count, next, results: questionData } = result;
      setQuestionData((prevData) => ({
        data: [...prevData.data, ...questionData],
      }));
      setTotal(count);
      setHasNext(next);
    } catch (err) {
      console.error(err);
      navigate(`/InvalidQuestionSubject`);
    } finally {
      offset.current += limit;
      setIsLoading(false);
    }
  };

  const handleCheckValidation = (id) => {
    if (!checkLocalStorageById(id)) {
      navigate('/UseYourOwnAccount');
    }
  };

  const observeCallback = (entries) => {
    entries.forEach((entry) => {
      if (isLoading) return;
      if (!entry.isIntersecting) return;
      handleFeedCardSection(subjectId, LIMIT, offset);
    });
  };

  const observer = new IntersectionObserver(observeCallback, {
    threshold: 0.4,
  });

  useEffect(() => {
    handleCheckValidation(subjectId);
  }, [location]);

  useEffect(() => {
    observer.observe(target.current);
  }, [location, offset]);

  return (
    <>
      <PostHeader
        id={subjectId}
        setterSubjectName={setSubjectName}
        setterSubjectImg={setSubjectImg}
        filter={option.filter}
      />
      <Styled.MainContainer>
        <FeedCardSection
          total={total}
          data={questionData.data}
          subjectData={[subjectName, subjectImg]}
          setTotal={setTotal}
          setQuestionData={setQuestionData}
        />
        {hasNext && <Styled.ObserveTargetBox ref={target} />}
        {isLoading && <ModalLoading back="noBG" />}
      </Styled.MainContainer>
    </>
  );
};

export default AnswerFeedPage;
