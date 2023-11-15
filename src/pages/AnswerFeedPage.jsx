import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PostHeader, ModalLoading, FeedCardSection } from 'components';
import { getSubjectsQuestion } from 'api/api';
import { infiniteScroll } from 'api/infiniteScroll';
import * as Styled from './StyleFeedPage';

const LIMIT = 2;

const AnswerFeedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const target = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const option = { filter: true };
  const observer = infiniteScroll(isLoading, LIMIT, setOffset);

  const handleFeedCardSection = async (...args) => {
    setIsLoading(true);
    try {
      const result = await getSubjectsQuestion(...args);
      const { count, results: questionData } = result;
      setQuestionData((prevData) => ({
        data: [...prevData.data, ...questionData],
      }));
      setTotal(count);
    } catch (err) {
      console.log(err);
      navigate(`/InvalidQuestionSubject`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFeedCardSection(subjectId, LIMIT, offset);
  }, [location, offset]);

  useEffect(() => {
    observer.observe(target.current);
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
        <Styled.ObserveTargetBox ref={target} />
        {isLoading && <ModalLoading back="noBG" />}
      </Styled.MainContainer>
    </>
  );
};

export default AnswerFeedPage;
