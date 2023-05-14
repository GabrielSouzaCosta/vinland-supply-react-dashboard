import { useEffect, useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Context } from './@types/context'
import { useStateContext } from './context/ContextProvider'
import AppRoutes from './routes'
import { GlobalStyle } from './styles/common/GlobalStyle'
import { lightTheme, darkTheme } from './styles/common/theme'

const savedThemePreference = localStorage.getItem('theme');

function App() {
  const { theme, setTheme } = useStateContext();

  useLayoutEffect(() => {
    savedThemePreference ?
      setTheme(savedThemePreference)
    :
      setTheme('dark');
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
