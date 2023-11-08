import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 32px;
  border-radius: 16px;
  box-shadow: var(--shadow-1pt);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Question = styled.div``;

export const QuestionTime = styled.div`
  color: var(--gray40);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
`;

export const QuestionContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--gray30);
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 32px;
`;

export const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const FooterIcon = styled.img`
  width: 16px;
  height: 16px;
  color: var(--gray40);
`;

export const ProfileImage = styled.img`
  width: 49px;
  height: 49px;
`;
