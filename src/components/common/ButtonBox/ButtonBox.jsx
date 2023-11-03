import * as Styled from './StyleButtonBox';

const ButtonBox = ({ children }) => {
  return (
    <Styled.ButtonBox>
      <Styled.ArrowRight />
      <Styled.ButtonText>{children}</Styled.ButtonText>
      <Styled.ArrowRight />
    </Styled.ButtonBox>
  );
};

export default ButtonBox;
