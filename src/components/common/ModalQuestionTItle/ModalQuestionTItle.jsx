import { ReactComponent as Message} from 'assets/icon/messages.svg';
import { ReactComponent as CloseButton} from 'assets/icon/close.svg';
import * as Styled from './StyleModalQuestionTitle';

const ModalQuestionTitle = ({onClick}) => {
  return (
    <>
      <Styled.TitleBox>
        <Styled.Title>
          <Message width={28} height={28} fill={'var(--gray60)'}/> 
          질문을 작성하세요 
        </Styled.Title>
        <CloseButton width={28} height={28} fill={'var(--gray60)'} onClick={onClick}/>
      </Styled.TitleBox>
    </>
  )
}

export default ModalQuestionTitle;