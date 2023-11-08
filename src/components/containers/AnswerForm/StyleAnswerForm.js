import styled from 'styled-components';
import { ButtonBox } from 'components/common/ButtonBox/StyleButtonBox';

export const AnswerContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 120;
`;

export const AnswerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const AnswerName = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AnswerDate = styled.div`
  color: var(--gray40);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const AnswerContent = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const RefuseContent = styled.div`
  color: var(--red);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const Form = styled.form`
  height: 180px;

  @media (max-width: 767px) {
    height: 358px;
  }
`;

export const Button = styled(ButtonBox)`
  margin-top: 8px;
  width: 100%;
  border: none;
  color: #fff;
  background-color: ${(props) =>
    props.$active ? `var(--brown40)` : `var(--brown30)`};
`;
