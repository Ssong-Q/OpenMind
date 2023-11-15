import * as Styled from './StyleDropDownList';

function DropDownList({ onNameClick, onNewestClick, sorted }) {
  return (
    <Styled.Ul>
      <li>
        <Styled.Button
          onClick={onNameClick}
          $select={sorted === 'name' ? 'true' : 'false'}
        >
          이름순
        </Styled.Button>
      </li>
      <li>
        <Styled.Button
          onClick={onNewestClick}
          $select={sorted === 'time' ? 'true' : 'false'}
        >
          최신순
        </Styled.Button>
      </li>
    </Styled.Ul>
  );
}

export default DropDownList;
