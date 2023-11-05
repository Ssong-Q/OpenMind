import * as Style from './StyleThumbsButton';
import {ReactComponent as ThumbsDown} from 'assets/icon/thumbs-down.svg';

const ThumbsDownButton = ({active, onClick}) => {
  
  const color = `${active === 1 ? 'var(--blue)' : 'var(--gray40)'}`;

  return(
    <Style.Container active={active} onClick={onClick}>
      <ThumbsDown fill={color} />
      <span>싫어요 {active}</span>
    </Style.Container>
  )
}

export default ThumbsDownButton;