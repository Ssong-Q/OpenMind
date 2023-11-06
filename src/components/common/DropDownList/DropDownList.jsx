import * as Styled from './StyleDropDownList';

function DropDownList({ onNameClick, onNewestClick, sort }) {
  return (
    <Styled.Ul>
      <li>
        <Styled.Button onClick={onNameClick} select={sort === 'name' && 'true'}>
          이름순
        </Styled.Button>
      </li>
      <li>
        <Styled.Button
          onClick={onNewestClick}
          select={sort === 'time' && 'true'}
        >
          최신순
        </Styled.Button>
      </li>
    </Styled.Ul>
  );
}

export default DropDownList;
