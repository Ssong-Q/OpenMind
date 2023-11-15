import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputImage, AccountDelete } from 'components';
import { deleteSubjects } from 'api/api';
import { deleteLocalStorage } from 'utils/localStorage';
import * as Style from './StyleAccountForm';

function AccountForm({ name, image, id }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: name,
    imgFile: image,
  });
  const [visible, setVisible] = useState({
    boolean: false,
    message: '',
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUserNameChange = (e) => {
    setValues((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setVisible((prev) => ({
      ...prev,
      boolean: true,
      message: '확인을 부르면 계정이 삭제됩니다. 정말 삭제를 원하시나요?',
    }));
  };

  const handleDeleteAccountClick = async (e) => {
    e.preventDefault();
    try {
      const response = await deleteSubjects(id);
      deleteLocalStorage(id);
      if (response) navigate('/');
    } catch (error) {
      setVisible((prev) => ({
        ...prev,
        boolean: true,
        message: error.message,
      }));
    }
  };

  return (
    <Style.Form>
      <InputImage
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <Style.Container>
        <Style.Input
          name="name"
          value={values.name}
          onChange={handleUserNameChange}
        />
        <Style.Button>이름 변경</Style.Button>
        <Style.Button onClick={handleDeleteClick}>계정 삭제</Style.Button>
      </Style.Container>
      <AccountDelete
        onClick={handleDeleteAccountClick}
        visible={visible}
        setVisible={setVisible}
      />
    </Style.Form>
  );
}

export default AccountForm;
