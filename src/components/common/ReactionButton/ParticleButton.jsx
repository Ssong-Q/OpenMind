import * as Styled from './StyleParticleButton';
import { useEffect } from 'react';
import snow from 'assets/christmas/snow.png';

export default function ParticleButton() {
  //정수인 난수 생성(Max79 Min30)
  let group = [];

  const handleClick = () => {
    const num = Math.floor(Math.random() * 50) + 30;

    for (let i = 0; i < num; i++) {
      //크기 난수 (Max8 Min4)
      const scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
      //위치 난수 (Max149 Min100)
      const x = Math.floor(Math.random() * (150 + 100)) - 100;
      const y = Math.floor(Math.random() * (150 + 100)) - 100;
      //시간 난수 (Max1699ms Min1000ms)
      const sec = Math.floor(Math.random() * 1700) + 1000;
      group.push({ scale, sec, x, y });
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <Styled.BtnContain>
        <Styled.Btn>Click Me</Styled.Btn>
        <Styled.BtnParticles>
          {group.map((shape) => {
            <Styled.Shape
              src={snow}
              scale={shape.scale}
              sec={shape.sec}
              x={shape.x}
              y={shape.y}
            />;
          })}
        </Styled.BtnParticles>
      </Styled.BtnContain>
    </>
  );
}
