import * as Styled from './StylePopOverSort';

function PopOverSort({ onNameClick, onNewestClick, sort }) {
  return (
    <Styled.Container>
      <Styled.Button onClick={onNameClick} select={sort === '이름순'}>
        이름순
      </Styled.Button>
      <Styled.Button onClick={onNewestClick} select={sort === '최신순'}>
        최신순
      </Styled.Button>
    </Styled.Container>
  );
}

export default PopOverSort;
