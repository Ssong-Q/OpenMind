import styled from 'styled-components';
import { ReactComponent as Messages } from 'assets/icon/messages.svg';

/* PC: 1200px 이상
Tablet: 768px 이상 ~ 1199px 이하
Mobile: 375px 이상 ~ 767px 이하*/

export const MessageIcon = styled(Messages)`
  width: 18px;
  height: 18px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 16px;
    height: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  max-width: 220px;
  height: 187px;
  padding: 20px;
  border: 1px solid var(--gray40);
  border-radius: 16px;
  background: var(--gray10);

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 16px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
`;

export const Name = styled.p`
  font-family: Actor;
  font-size: 2rem;
  line-height: 2.5rem%;
  color: var(--gray60);

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: var(--gray40);
  white-space: nowrap;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
