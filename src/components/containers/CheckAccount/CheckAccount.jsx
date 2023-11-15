import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from 'utils/localStorage';
import { getSubjects } from 'api/api';
import { InputField, ButtonBox } from 'components';
import * as Style from './StyleCheckAccount';

const CheckAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [allList, setAllList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  //사용자들 정보 모두 가져와서 저장
  const handleAllList = async () => {
    try {
      const result = await Promise.all([getSubjects(null, 9999, 0)]);
      const list = [];
      result[0].results.map((data) => list.push(data.name));
      setAllList((prevArray) => [...prevArray, list]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = async () => {
    //존재하지 않는 사용자의 정보인 경우
    if (!allList[0].includes(name)) {
      setIsError(true);
      setErrorMessage('존재하지 않는 계정입니다.');
    } else {
      try {
        const storedId = getLocalStorage(name);
        const { id: userId } = await getSubjects(storedId);
        //내 계정이 아닌 값 입력하면 넘어가지 않도록
        if (userId === undefined) {
          setIsError(true);
          setErrorMessage('자신의 계정을 입력하시오.');
        } else {
          navigate(`/post/${userId}/answer`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //모든 사용자 정보 받아오기
  useEffect(() => {
    handleAllList();
  }, []);

  //이름 입력마다, 경고 문구 사라졌다가 버튼 클릭 시, 다시나타나도록 (사용성 높임)
  useEffect(() => {
    setIsError(false);
  }, [name]);

  const handleInputChange = (name) => {
    setName(name);
  };

  return (
    <>
      <Style.Input>
        <InputField onChange={handleInputChange} />
        {isError ? <Style.Alert>{errorMessage}</Style.Alert> : null}
        <ButtonBox onClick={handleButtonClick}>답변하러 가기</ButtonBox>
      </Style.Input>
    </>
  );
};

export default CheckAccount;
