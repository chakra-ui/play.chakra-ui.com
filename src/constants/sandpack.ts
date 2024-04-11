export const defaultCode = `
import { Button } from '@chakra-ui/react'

export const App = () => {
  return <Button>Click on me!</Button>
}
`.trim()

export const indexCode = `
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from './theme'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
`.trim()

export const themeCode = `
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({})
`.trim()

export const FILES_TO_EXCLUDE = [
  '/tsconfig.json',
  '/styles.css',
  '/public/index.html',
  '/package.json',
]
