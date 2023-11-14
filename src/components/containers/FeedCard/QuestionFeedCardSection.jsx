import { useContext } from 'react';
import { FeedCard, NoQuestionBox } from 'components';
import { ReactComponent as MessageImg } from 'assets/icon/messages.svg';
import {ReactComponent as SantaImg } from 'assets/santa.svg';
import * as Styled from './StyleFeedCardSection';
import { ThemeContext } from 'styled-components';

const QuestionFeedCardSection = ({ total, data, subjectData }) => {
  const theme = useContext(ThemeContext);

  return (
    <Styled.CardContainer>
      <Styled.CountContainer>
        {theme.snow ? <SantaImg /> :<MessageImg width="24" height="25" fill="#542F1A" />}
        <Styled.CountContent>
          {total ? `${total}개의 질문이 있습니다` : `아직 질문이 없습니다`}
        </Styled.CountContent>
      </Styled.CountContainer>
      {total ? null : <NoQuestionBox />}
      {data.map((data) => {
        return <FeedCard key={data.id} data={data} subjectData={subjectData} />;
      })}
    </Styled.CardContainer>
  );
};

export default QuestionFeedCardSection;
