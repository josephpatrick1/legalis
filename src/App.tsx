import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Entrar from './paginas/Entrar';
import Painel from './paginas/Painel';

const CreateTheme = ({ children }: { children: React.ReactNode }) => {
  const useDark = false;
  const theme = createTheme({
    palette: {
      type: useDark ? 'dark' : 'light',
      primary: {
        light: '#763333',
        main: '#540000',
        dark: '#3a0000',
        contrastText: '#fff',
      },
      secondary: {
        light: '#337676',
        main: '#005454',
        dark: '#003a3a',
        contrastText: '#fff',
      }
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

function App() {
  return (
    <CreateTheme>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => {
            window.location.href = "/website"
            return <></>
          }} />
          <Route path="/entrar">
            <Entrar />
          </Route>
          <Route path="/painel">
            <Painel />
          </Route>
        </Switch>
      </BrowserRouter>
    </CreateTheme>
  );
}

export default App;
