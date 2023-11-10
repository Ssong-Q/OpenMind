import { ReactComponent as Message } from 'assets/icon/messages.svg';
import {ReactComponent as CloseButton} from 'assets/icon/close.svg';
import * as Styled from './StyleModalQuestionTitle';


const ModalQuestionTitle = ({children, option, closeModal}) => {

  return (
    <>
      <Styled.TitleBox $visible={option.center}>
        <Styled.Title $visible={option.center}>
          {option.visible && <Message width={28} height={28} fill={'var(--gray60)'}/> }
          {children}
        </Styled.Title>
        <CloseButton width={28} height={28} fill={'var(--gray60)'} onClick={closeModal} style={{cursor:'pointer'}}/>
      </Styled.TitleBox>
    </>
  );
};

export default ModalQuestionTitle;
