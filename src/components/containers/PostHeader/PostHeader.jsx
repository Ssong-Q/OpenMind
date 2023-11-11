import { ProfileImage, ButtonShare, AccountForm } from 'components';
import { getSubjects } from 'api/api';
import { Link } from 'react-router-dom';
import * as Styled from './StylePostHeader';
import LogoImg from 'assets/logo.svg';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import useModal from 'hooks/useModal';

function PostHeader({ id, setterSubjectName, setterSubjectImg }) {
  const { isOpen, openModal, closeModal } = useModal();
  const option = { center: true };
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');

  const getSubjectInfo = async (subjectId) => {
    try {
      const result = await getSubjects(subjectId);
      const { name, imageSource } = result;
      setSubjectName(name);
      setSubjectImg(imageSource);
      setterSubjectName(name);
      setterSubjectImg(imageSource);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSubjectInfo(id);
  }, [id]);

  return (
    <>
      <Styled.Header>
        <Styled.Container>
          <Link to={'/'}>
            <Styled.Logo src={LogoImg} />
          </Link>
          <ProfileImage
            src={subjectImg}
            size="xLarge"
            mobilesize="large"
            onClick={openModal}
          />
          <Styled.Name>{subjectName}</Styled.Name>
          <ButtonShare name={subjectName} image={subjectImg} />
        </Styled.Container>
      </Styled.Header>
      {isOpen && (
        <Modal
          title="계정 관리"
          trigger={
            <AccountForm image={subjectImg} name={subjectName} id={id} />
          }
          option={option}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default PostHeader;
