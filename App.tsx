import React from 'react'
import Route from './src/routes'
import { theme, darkTheme } from './src/theme';
import { ThemeContext } from './src/context/themeContext';
import { useColorScheme } from 'react-native';

function App(): React.JSX.Element {
  const themeMode = useColorScheme();

  return <>
    <ThemeContext.Provider value={themeMode === 'light' ? theme : darkTheme}>
      <Route />
    </ThemeContext.Provider>
  </>
}

export default App
