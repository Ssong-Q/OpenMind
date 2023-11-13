import * as Styled from './Style.NoQuestionBox';
import { ReactComponent as NoQuestion } from 'assets/no-question.svg';

const NoQuestionBox = () => {
  return (
    <Styled.Container>
      <NoQuestion />
    </Styled.Container>
  );
};

export default NoQuestionBox;
