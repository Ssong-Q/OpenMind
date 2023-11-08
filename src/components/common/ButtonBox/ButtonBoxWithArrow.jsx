import * as Styled from './StyleButtonBox';

const ButtonBoxWithArrow = ({ children, onClick }) => {
  return (
    <Styled.ButtonBox onClick={onClick}>
      <Styled.ButtonText>{children}</Styled.ButtonText>
      <Styled.ArrowRight />
    </Styled.ButtonBox>
  );
};

export default ButtonBoxWithArrow;
