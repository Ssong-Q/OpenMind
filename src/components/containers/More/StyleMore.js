import styled from 'styled-components';
import { ReactComponent as KebabIcon } from 'assets/icon/more.svg';

export const Container = styled.div`
  position: relative;
`;

export const Kebab = styled(KebabIcon)`
  cursor: pointer;
`;
