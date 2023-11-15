import styled from 'styled-components';

//'URL이 복사되었습니다' ToastButton으로 사용합니다
export const Toast = styled.div`
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  border-radius: 8px;
  background-color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: var(--gray10);
  box-shadow: var(--shadow-2pt);

  @media (max-width: 767px) {
    bottom: 100px;
  }
`;
