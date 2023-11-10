import { ButtonBox } from 'components/common/ButtonBox/StyleButtonBox';
import styled from 'styled-components'

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 40px;
  margin-bottom: 15px;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const Form = styled.form`
  height: 180px;

  @media (max-width: 767px) {
    height: 358px;
  }
`;

export const Button = styled(ButtonBox)`
  margin-top: 8px;
  width: 100%;
  border: none;
  color: #fff;
  cursor: ${({$active}) => (!$active) && `default`};
  background-color: ${({$active}) =>
    $active ? `var(--brown40)` : `var(--brown30)`};
`;