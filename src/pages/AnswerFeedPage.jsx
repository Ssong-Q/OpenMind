import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostHeader, ModalLoading, FeedCardSection } from 'components';
import { checkLocalStorageById } from 'utils/localStorage';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const LIMIT = 5;

const AnswerFeedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const target = useRef();
  const offsetRef = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const option = { filter: true };

  //질문데이터 가져오기
  const handleLoad = useCallback(
    async (id, limit, offset) => {
      try {
        setIsLoading(true);
        const result = await getSubjectsQuestion(id, limit, offset);
        const { count, next, results: questionData } = result;
        setQuestionData((prevData) => ({
          data: [...prevData.data, ...questionData],
        }));
        setTotal(count);
        setHasNext(next);
        offsetRef.current += limit;
      } catch (err) {
        console.log(err);
        navigate(`/InvalidQuestionSubject`);
      } finally {
        setIsLoading(false);
      }
    },
    [getSubjectsQuestion]
  );

  const handleCheckValidation = (id) => {
    if (!checkLocalStorageById(id)) {
      navigate('/UseYourOwnAccount');
    }
  };

  const handleLoadMore = async () => {
    await handleLoad(subjectId, LIMIT, offsetRef.current);
  };

  const observeCallback = (entries) => {
    entries.forEach((entry) => {
      if (isLoading) return;
      if (!entry.isIntersecting) return;
      handleLoadMore();
    });
  };

  const observer = new IntersectionObserver(observeCallback, {
    threshold: 0.2,
  });

  useEffect(() => {
    handleCheckValidation(subjectId);
  }, [location]);

  useEffect(() => {
    observer.observe(target.current);
  }, [location, offsetRef]);

  useEffect(() => {
    handleLoad(subjectId, LIMIT, 0);
  }, []);

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
