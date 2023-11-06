import styled from 'styled-components';

const SIZES = {
  xLarge: 136, //header
  large: 104, //header-mobile
  mediumLarge: 60, //usercard
  mediumSmall: 48, //usercard-mobile
  small: 32,
  xSmall: 28,
};

export const Div = styled.div`
  border-radius: 70%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: ${({ size }) => (size ? SIZES[size] : SIZES['mediumLarge'])}px;
  height: ${({ size }) => (size ? SIZES[size] : SIZES['mediumLarge'])}px;

  @media max-width: 767px {
    width: ${({ mobileSize }) =>
      mobileSize ? SIZES[mobileSize] : SIZES['mediumSmall']}px;
    height: 
    ${({ mobileSize }) =>
      mobileSize ? SIZES[mobileSize] : SIZES['mediumSmall']}px;
`;
