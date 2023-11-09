import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PostHeader,
  QuestionFeedCardSection,
  WriteQuestionModal,
  ModalLoading,
} from 'components';
import { getSubjects } from 'api/api';
import { getSubjectsQuestion } from 'api/api';
import * as Styled from './StyleFeedPage';

const QuestionFeedPage = () => {
  const location = useLocation();
  const subjectId = location.pathname.split('/')[2];
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
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
      console.log(questionData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  //사용자 데이터 호출
  const handleSubjectInfo = async () => {
    try {
      const result = await getSubjects(subjectId);
      const { name, imageSource } = result;
      setSubjectName(name);
      setSubjectImg(imageSource);
      console.log(name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSubjectInfo();
  }, []);

  useEffect(() => {
    handleFeedCardSection(subjectId, limit, offset);
  }, [location, limit, offset, total]);

  const handleWriteQuestion = () => {
    setVisible(true);
  };

  console.log(setLimit, setOffset);
  return (
    <>
      <PostHeader id={subjectId} />
      <Styled.MainContainer>
        <QuestionFeedCardSection
          total={total}
          data={questionData.data}
          subjectName={subjectName}
          subjectImg={subjectImg}
        />
        {isLoading && <ModalLoading />}
        <Styled.WriteButton onClick={handleWriteQuestion}>
          질문 작성하기
        </Styled.WriteButton>
      </Styled.MainContainer>
      {visible && (
        <WriteQuestionModal
          onClose={setVisible}
          name={subjectName}
          img={subjectImg}
          id={subjectId}
        />
      )}
    </>
  );
};

export default QuestionFeedPage;
