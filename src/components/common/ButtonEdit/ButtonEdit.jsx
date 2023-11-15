import { ReactComponent as EditIcon } from 'assets/icon/edit.svg';
import * as Styled from './StyleButtonEdit';

const ButtonEdit = ({ onClick, isModify }) => {
  const modify = isModify ? `modify` : '';
  return (
    <Styled.Button onClick={onClick} $modify={modify}>
      <EditIcon width="14" height="14" />
      {isModify ? `취소하기` : `수정하기`}
    </Styled.Button>
  );
};

export default ButtonEdit;
