import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const cardSectionContainer = styled.section`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ListPageHeader = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

export const cardSectionBox = styled.div`
  display: grid;
`;
