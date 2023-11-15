import { styled } from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  justify-content: ${({ $option }) => ( `${$option.center}` ? 'end' : 'space-between')};
  align-items: center;

  @media (max-width: 767px) {
    gap: ${({ $option }) => `${$option.center}` && '75px'};
  }
`;
export const Title = styled(TitleBox)`
  display: flex;
  gap: 8px;
  color: var(--gray60);
  font-family: Actor;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 30px;
  flex-grow:${({ $option }) => `${$option.center}` && '1'};
  justify-content: ${({ $option }) => `${$option.center}` === true ? 'center' : 'flex-start'};
  


  @media (max-width: 767px) {
    font-size: ${({ $option }) => `${$option.smallContainer}` ? `1.6` : `2`}rem;
    line-height: 25px;
  }
`;
