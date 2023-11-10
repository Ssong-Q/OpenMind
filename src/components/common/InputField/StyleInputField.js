import styled from 'styled-components';
import personImg from 'assets/icon/person.svg';

export const InputFieldBox = styled.div`
  display: flex;
  align-items: center;
  width: 336px;
  padding: 12px 16px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid
    ${({ focused }) =>
      focused === 'true' ? `var(--brown40)` : `var(--gray40)`};

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PersonImg = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${personImg});
  background-position: center;
  background-size: cover;
`;

export const InputField = styled.input`
  width: 100%;
  font-size: 1.4rem;
  color: var(--gray60);

  &::placeholder {
    color: var(--gray40);
  }
`;
