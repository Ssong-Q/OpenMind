import styled from 'styled-components';

const SIZES = {
  xLarge: 136,
  large: 104,
  medium: 60,
  small: 48,
  xSmall: 28,
};

export const Div = styled.div`
  border-radius: 70%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: ${({ size }) => (size ? SIZES[size] : SIZES['medium'])}px;
  height: ${({ size }) => (size ? SIZES[size] : SIZES['medium'])}px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: ${({ size }) =>
      size == 'xLarge' ? SIZES['large'] : SIZES['small']}px;
    height: ${({ size }) =>
      size == 'xLarge' ? SIZES['large'] : SIZES['small']}px;
  }
`;
