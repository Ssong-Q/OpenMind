import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Snowfall from 'react-snowfall';
import { StyledGlobal } from 'style/StyleGlobal';
import THEME from 'style/theme';

const App = () => {
  const initTheme = localStorage.getItem('theme') ?? 'basic';
  const [theme, setTheme] = useState(THEME[initTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        {theme.snow && (
          <div>
            <Snowfall
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
              }}
            />
          </div>
        )}
        <StyledGlobal />
        <Outlet context={{ setTheme }} />
      </ThemeProvider>
    </>
  );
};

export default App;
