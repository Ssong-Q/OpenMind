import ModalPortal from 'Portal';
import { StyledGlobal } from 'style/StyleGlobal';
import * as Styled from './Modal';

const ModalLoading = () => {
  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground>
          <Styled.Spinner />
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalLoading;
