import styled from 'styled-components';

//'URL이 복사되었습니다' ToastButton으로 사용합니다
export const Toast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  color: var(--gray10);
  box-shadow: var(--shadow-2pt);
  cursor: default;
`;
