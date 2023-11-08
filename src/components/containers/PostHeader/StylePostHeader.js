import styled from 'styled-components';
import TwoGuysImg from 'assets/twoguys-image-half.svg';

export const Header = styled.div`
  display: block;
  justify-content: center;
  background-image: url(${TwoGuysImg});
  background-position: top center;
  background-size: auto;
  background-repeat: no-repeat;

  @media (max-width: 1199px) {
    background-size: 1200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: auto;
  padding-top: 50px;
  margin-bottom: 10px;
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
