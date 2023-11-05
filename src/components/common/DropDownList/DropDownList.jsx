import * as Styled from './StyleDropDownList';

function DropDownList({ onNameClick, onNewestClick, sort }) {
  return (
    <Styled.Ul>
      <li>
        <Styled.Button onClick={onNameClick} select={sort === '이름순'}>
          이름순
        </Styled.Button>
      </li>
      <li>
        <Styled.Button onClick={onNewestClick} select={sort === '최신순'}>
          최신순
        </Styled.Button>
      </li>
    </Styled.Ul>
  );
}

export default DropDownList;
