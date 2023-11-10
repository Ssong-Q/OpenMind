import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PostHeader,
  QuestionFeedCardSection,
  WriteQuestionModal,
  ModalLoading,
} from 'components';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const OFFSET = 0;

const QuestionFeedPage = () => {
  const location = useLocation();
  const subjectId = location.pathname.split('/')[2];
  const target = useRef();
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [total, setTotal] = useState(null); //전체 질문 수
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  //질문 목록 데이터 호출
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

  const observeCallback = useCallback(() => {
    if (isLoading) return;
    setLimit((prev) => prev + 1);
  }, []);

  const observer = new IntersectionObserver(observeCallback, observeOptions);

  useEffect(() => {
    handleFeedCardSection(subjectId, limit, OFFSET);
  }, [location, limit]);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const handleWriteQuestion = () => {
    setVisible(true);
  };

  return (
    <>
      <PostHeader
        id={subjectId}
        setterSubjectName={setSubjectName}
        setterSubjectImg={setSubjectImg}
      />
      <Styled.MainContainer>
        <QuestionFeedCardSection
          total={total}
          data={questionData.data}
          subjectData={[subjectName, subjectImg]}
        />
        <Styled.ObserveTargetBox ref={target} />
        {isLoading && <ModalLoading back="noBG" />}
        <Styled.WriteButton onClick={handleWriteQuestion}>
          질문 작성하기
        </Styled.WriteButton>
      </Styled.MainContainer>
      {visible && (
        <WriteQuestionModal
          onClose={setVisible}
          subjectData={[subjectName, subjectImg, subjectId]}
          setQuestionData={setQuestionData}
          setVisible={setVisible}
        />
      )}
    </>
  );
};

export default QuestionFeedPage;
