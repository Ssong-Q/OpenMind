import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PostHeader,
  QuestionFeedCardSection,
  WriteQuestionModal,
  ModalLoading,
  Modal,
} from 'components';
import useModal from 'hooks/useModal';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const LIMIT = 5;

const QuestionFeedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const { isOpen, openModal, closeModal } = useModal();
  const option = { visible: true, filter: true };
  const target = useRef();
  const [hasNext, setHasNext] = useState(true);
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null); //전체 질문 수
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  //질문 목록 데이터 호출
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
      console.log(err);
      navigate(`/InvalidQuestionSubject`);
    } finally {
      offset.current += limit;
      setIsLoading(false);
    }
  };

  const observeCallback = (entries) => {
    if (isLoading) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleFeedCardSection(subjectId, LIMIT, offset);
      }
    });
  };

  const observer = new IntersectionObserver(observeCallback, {
    threshold: 0.2,
  });

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
        <QuestionFeedCardSection
          total={total}
          data={questionData.data}
          subjectData={[subjectName, subjectImg]}
        />
        {hasNext && <Styled.ObserveTargetBox ref={target} />}
        {isLoading && <ModalLoading back="noBG" />}
        <Styled.WriteButton onClick={openModal}>
          질문 작성하기
        </Styled.WriteButton>
      </Styled.MainContainer>
      {isOpen && (
        <Modal
          title="질문을 작성하세요"
          trigger={
            <WriteQuestionModal
              closeModal={closeModal}
              subjectData={[subjectName, subjectImg, subjectId]}
              setQuestionData={setQuestionData}
              questionData={questionData}
              setTotal={setTotal}
            />
          }
          option={option}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default QuestionFeedPage;
