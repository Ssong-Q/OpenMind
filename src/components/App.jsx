import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StyledGlobal } from 'style/StyleGlobal';
import THEME from 'style/theme';
import Snowfall from 'react-snowfall';

const App = () => {
  const [ theme, setTheme ] = useState(THEME['christmas'])  //'christmas'& 'basic'으로 변경

  return (
    <>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        {theme.snow &&  <div><Snowfall /></div>}
        <StyledGlobal />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
