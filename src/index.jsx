import ReactDOM from 'react-dom/client';
import Main from 'Main';
import { StyledGlobal } from 'style/StyleGlobal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StyledGlobal />
    <Main />
  </>
);
