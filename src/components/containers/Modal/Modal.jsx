import ModalPortal from 'Portal';
import {ModalQuestionTitle} from 'components';
import * as Style from './StyleModal';

const Modal = ({ trigger, title, option, closeModal }) => {


  return (
    <>
      <ModalPortal>
        <Style.ModalBackground onClick={closeModal} />
        <Style.Container $smallContainer={option.smallContainer}>
          <ModalQuestionTitle option={option} closeModal={closeModal}>{title}</ModalQuestionTitle>
          {trigger}
        </Style.Container>
      </ModalPortal>
    </>
  );
};

export default Modal;
