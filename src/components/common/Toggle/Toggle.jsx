import { useState, useEffect } from 'react';
import THEME from 'style/theme';
import * as Styled from './StyleToggle';

const Toggle = ({ setTheme, mobile }) => {
  const initTheme =
    localStorage.getItem('theme') === 'christmas' ? true : false;
  const [isOn, setIsOn] = useState(initTheme);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    if (isOn) {
      setTheme(THEME['christmas']);
      localStorage.setItem('theme', 'christmas');
    } else {
      setTheme(THEME['basic']);
      localStorage.setItem('theme', 'basic');
    }
  }, [isOn]);

  return (
    <>
      <Styled.ToggleContainer
        // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
        onClick={toggleHandler}
        $mobile={mobile}
      >
        {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
        {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
        <Styled.ToggleBox $isOn={isOn} />
        <Styled.ToggleCircle $isOn={isOn} />
      </Styled.ToggleContainer>
    </>
  );
};

export default Toggle;
