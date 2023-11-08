import styled from 'styled-components';
import * as Styled from './StyleButtonBox';

const StyledButtonBox = styled(Styled.ButtonBox)`
  display: flex;
  background-color: var(--brown40);
  width: 100%;
`;

const StyledButtonText = styled(Styled.ButtonText)`
  color: var(--gray10);
  font-family: 'Pretendard';
`;

const ButtonBox = ({ onClick, children }) => {
  return (
    <StyledButtonBox onClick={onClick}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButtonBox>
  );
};

export default ButtonBox;
