import * as Style from './StyleThumbsButton';
import {ReactComponent as ThumbsUp} from 'assets/icon/thumbs-up.svg'

const ThumbsUpButton = ({active, onClick}) => {

  const color = `${active === 1 ? 'var(--blue50)' : 'var(--gray40)'}`;

  return(
    <Style.Container active={active} onClick={onClick}>
      <ThumbsUp fill={color} />
      <span>좋아요 {active}</span>
    </Style.Container>
  )
}

export default ThumbsUpButton;