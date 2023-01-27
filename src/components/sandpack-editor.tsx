import { Box } from '@chakra-ui/react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { nightOwl } from '@codesandbox/sandpack-themes'

import { indexCode, themeCode } from '../constants/sandpack'
import CopyUrlButton from './copy-url-button'

type SandpackEditorProps = {
  code: string
}

const SandpackEditor = ({ code }: SandpackEditorProps) => {
  return (
    <SandpackProvider
      template='react-ts'
      theme={nightOwl}
      customSetup={{
        dependencies: {
          '@chakra-ui/react': 'latest',
          '@chakra-ui/icons': 'latest',
          '@chakra-ui/anatomy': 'latest',
          '@chakra-ui/styled-system': 'latest',
          '@emotion/styled': 'latest',
          '@emotion/react': 'latest',
          'framer-motion': 'latest',
          'react-icons': 'latest',
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
      <CopyUrlButton />
      <Box
        as={SandpackLayout}
        sx={{
          '--sp-layout-height': 'auto',
        }}
        style={{ flexDirection: 'row' }}
        height='100vh'
      >
        <SandpackCodeEditor
          showLineNumbers
          style={{
            maxHeight: '100vh',
            minWidth: '400px',
          }}
        />
        <Box
          as={SandpackPreview}
          minHeight='350px'
          showOpenInCodeSandbox={false}
          showRefreshButton={false}
        />
      </Box>
    </SandpackProvider>
  )
}

export default SandpackEditor
