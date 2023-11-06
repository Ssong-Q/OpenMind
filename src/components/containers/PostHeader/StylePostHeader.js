import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Background = styled.img`
  min-width: 1200px;

  @media (max-width: 767px) {
    min-width: 906px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding-top: 50px;
`;

export const Logo = styled.img`
  width: 170px;
  height: 67px;

  @media (max-width: 767px) {
    width: 124px;
    height: 49px;
  }
`;

export const Name = styled.h2`
  @media (max-width: 767px) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;
