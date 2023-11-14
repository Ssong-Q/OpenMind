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
import { infiniteScroll } from 'api/infiniteScroll';
import * as Styled from './StyleFeedPage';

const LIMIT = 2;

const QuestionFeedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const { isOpen, openModal, closeModal } = useModal();
  const option = { visible: true, filter: true };
  const target = useRef();
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null); //전체 질문 수
  const [questionData, setQuestionData] = useState({
    data: [],
  });
  const observer = infiniteScroll(isLoading, LIMIT, setOffset);

  //질문 목록 데이터 호출
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
