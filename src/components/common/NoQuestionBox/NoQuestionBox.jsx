import * as Styled from './Style.NoQuestionBox';
import { ReactComponent as NoQuestion } from 'assets/no-question.svg';
/* 넘어오는 데이터가 있으면 몇개의 질문이 있습니다 span
                 없으면 아직 질문이 없습니다 span*/

const NoQuestionBox = () => {
  // const title = num ? `${num}개의 질문이 있습니다.` : `아직 질문이 없습니다.`;

  return (
    <Styled.Container>
      {/* <Styled.Title>
        <Message fill={'var(--brown40)'} width={24} height={24} />
        <span>{title}</span>
      </Styled.Title> */}
      <NoQuestion />
    </Styled.Container>
  );
};

export default NoQuestionBox;
