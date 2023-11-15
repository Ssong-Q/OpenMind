import { styled } from 'styled-components';

const FONT_COLOR = {
  false: `var(--gray40)`,
  blue: `var(--blue)`,
  red: `var(--red)`,
};

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  span {
    color: ${({ $active }) => FONT_COLOR[$active] || 'var(--gray40)'};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 18px;
  }
`;
