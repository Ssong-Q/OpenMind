import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PostHeader,
  QuestionFeedCardSection,
  WriteQuestionModal,
  ModalLoading,
  Modal
} from 'components';
import useModal from 'hooks/useModal';
import {  getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const OFFSET = 0;

const QuestionFeedPage = () => {
  const location = useLocation();
  const subjectId = location.pathname.split('/')[2];
  const {isOpen, openModal, closeModal} = useModal();
  const option =  { visible : true };
  const target = useRef();
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(1);
  const [total, setTotal] = useState(null); //전체 질문 수
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  console.log(questionData);
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
        <Styled.WriteButton onClick={openModal}>
          질문 작성하기
        </Styled.WriteButton>
      </Styled.MainContainer>
      {isOpen && (<Modal title="질문을 작성하세요" trigger={
        <WriteQuestionModal
          closeModal={closeModal}
          subjectData={[subjectName, subjectImg, subjectId]}
          setQuestionData={setQuestionData}
          questionData={questionData}
          setTotal={setTotal}
        />} option={option} closeModal={closeModal}/>
      )}
    </>
  );
};

export default QuestionFeedPage;
