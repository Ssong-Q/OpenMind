import ModalPortal from 'Portal';
import { StyledGlobal } from 'style/StyleGlobal';
import * as Styled from './Modal';

const ModalLoading = ({ back }) => {
  return (
    <>
      <StyledGlobal />
      <ModalPortal>
        <Styled.ModalBackground back={back}>
          <Styled.Spinner />
        </Styled.ModalBackground>
      </ModalPortal>
    </>
  );
};

export default ModalLoading;
