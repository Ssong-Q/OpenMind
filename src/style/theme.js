import messageImg from 'assets/icon/messages.svg';
import santaImg from 'assets/santa.svg';

const basic = {
  snow: false,
  backgroundColor: 'var(--gray20)',
  button: {
    button1: 'var(--brown10)',
    button2: 'var(--brown40)',
    button3: 'var(--brown30)',
    button4: 'var(--brown30)',
  },
  border: { border1: 'var(--gray10)', border2: 'var(--brown40)' },
  color: {
    color1: 'var(--gray10)',
    color2: 'var(--brown40)',
    color3: 'var(--brown50)',
    color4: 'var(--gray40)',
    color5: 'var(--gray60)',
  },
  icon: `${messageImg}`,
};

const christmas = {
  snow: true,
  backgroundColor: 'var(--gray10)',
  button: {
    button1: '#942920',
    button2: '#942920',
    button3: '#315c30',
    button4: 'var(--brown30)',
  },
  border: { border1: 'var(--gray10)', border2: 'var(--gray10)' },
  color: {
    color1: 'var(--gray10)',
    color2: 'var(--gray10)',
    color3: '#942920',
    color4: '#315c30',
    color5: '#942920',
  },
  icon: `${santaImg}`,
};

const THEME = {
  basic,
  christmas,
};

export default THEME;
