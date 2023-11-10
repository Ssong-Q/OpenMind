import NoQuestionBox from 'components/common/NoQuestionBox/NoQuestionBox';

/*  데이터 총 갯수 {중괄호}에 넘겨주고
    <AnswerBox> ~</AnswerBox>사이에 데이터를 받아와서 
    지수님 컴포넌트로 map돌리면 될것같습니다! 그러면 AnswerBox children으로 내려갑니다*/

const items = [1, 2, 3, 4];

const QuestionList = () => {
  return (
    <>
      <NoQuestionBox num={items.length}>
        {items.map((item, index) => (
          <a key={index}>{item}</a>
        ))}
      </NoQuestionBox>
    </>
  );
};

export default QuestionList;
