import 'regenerator-runtime'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { ContextProvider } from './context/ContextProvider'
import { GlobalStyle } from './styles/common/GlobalStyle'

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: Infinity,
    refetchOnWindowFocus: true,
  }
});   

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </ ContextProvider>
  </React.StrictMode>,
)
