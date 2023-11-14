import { useContext } from 'react';
import * as Styled from './Style.NoQuestionBox';
import { ReactComponent as NoQuestion } from 'assets/no-question.svg';
import { ThemeContext } from 'styled-components';
import {ReactComponent as LeafImg } from 'assets/icon/christmas-leaf.svg';

const NoQuestionBox = () => {
  const theme = useContext(ThemeContext);

  return (
    <Styled.Container>
      {theme.snow ? <LeafImg /> : <NoQuestion />}
    </Styled.Container>
  );
};

export default NoQuestionBox;
