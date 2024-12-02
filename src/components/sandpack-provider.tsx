import { SandpackProvider as BaseSandpackProvider } from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'

import { indexCode, themeCode } from '../constants/sandpack'

type SandpackProps = {
  children?: React.ReactNode
  code: string
}

export const SandpackProvider = ({ children, code }: SandpackProps) => (
  <BaseSandpackProvider
    style={{ flex: '1' }}
    template='react-ts'
    theme={{
      ...nightOwl,
      font: {
        ...nightOwl.font,
        mono: 'SF Mono, Menlo, Monaco, Consolas, monospace',
      },
    }}
    customSetup={{
      dependencies: {
        '@chakra-ui/react': '^2.8.2',
        '@chakra-ui/icons': '^2.1.1',
        '@chakra-ui/anatomy': 'v2-latest',
        '@chakra-ui/styled-system': 'v2-latest',
        '@emotion/styled': '^11.10.5',
        '@emotion/react': '^11.10.5',
        'framer-motion': '^8.5.0',
        'react-icons': '^4.7.1',
      },
    }}
    files={{
      '/App.tsx': code,
      '/theme.ts': themeCode,
      '/index.tsx': {
        hidden: true,
        code: indexCode,
      },
    }}
  >
    {children}
  </BaseSandpackProvider>
)
