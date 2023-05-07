import { ThemeProvider } from 'styled-components'
import { useStateContext } from './context/ContextProvider'
import AppRoutes from './routes'
import { GlobalStyle } from './styles/common/GlobalStyle'
import { lightTheme, darkTheme } from './styles/common/theme'

function App() {
  const { theme } = useStateContext();

  console.log(theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
