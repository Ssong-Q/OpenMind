import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const cardSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 1199px) {
    padding: 0 45px;
  }
`;

export const ListPageHeader = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;
