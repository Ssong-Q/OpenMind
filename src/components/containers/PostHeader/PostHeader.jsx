import { ProfileImage, ButtonShare } from 'components';
import { getSubjects } from 'api/api';
import { Link } from 'react-router-dom';
import * as Styled from './StylePostHeader';
import LogoImg from 'assets/logo.svg';
import { useEffect, useState } from 'react';

function PostHeader({ id }) {
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');

  const getSubjectInfo = async (subjectId) => {
    try {
      const result = await getSubjects(subjectId);
      const { name, imageSource } = result;
      setSubjectName(name);
      setSubjectImg(imageSource);
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
          <ProfileImage src={subjectImg} size="xLarge" mobilesize="large" />
          <Styled.Name>{subjectName}</Styled.Name>
          <ButtonShare name={subjectName} image={subjectImg} />
        </Styled.Container>
      </Styled.Header>
    </>
  );
}

export default PostHeader;
