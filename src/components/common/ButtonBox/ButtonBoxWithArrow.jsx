import * as Styled from './StyleButtonBox';

const ButtonBoxWithArrow = ({ children }) => {
  return (
    <Styled.ButtonBox>
      <Styled.ButtonText>{children}</Styled.ButtonText>
      <Styled.ArrowRight />
    </Styled.ButtonBox>
  );
};

export default ButtonBoxWithArrow;
