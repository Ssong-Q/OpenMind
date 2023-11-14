import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import THEME from 'style/theme';
import * as Styled from './StyleButtonBox';

const ButtonBoxWithArrow = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);

  return (
    <Styled.ButtonBox onClick={onClick}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
      <Styled.ArrowRight
        $color={theme === THEME['basic'] ? 'brown' : 'white'}
      />
    </Styled.ButtonBox>
  );
};

export default ButtonBoxWithArrow;
