import * as Styled from './StyleButtonEdit';
import { ReactComponent as EditIcon } from 'assets/icon/edit.svg';

const ButtonEdit = ({ onClick }) => {
  return (
    <Styled.Button onClick={onClick}>
      <EditIcon width="14" height="14" />
      수정하기
    </Styled.Button>
  );
};

export default ButtonEdit;
