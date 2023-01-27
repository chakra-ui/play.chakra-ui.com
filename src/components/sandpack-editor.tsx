import { Box } from '@chakra-ui/react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react'

const SandpackEditor = () => {
  return (
    <>
      <Box
        as={SandpackLayout}
        sx={{
          '--sp-layout-height': 'auto',
          '--sp-colors-disabled': 'colors.gray.700',
          '--sp-syntax-fontStyle-keyword': 'normal',
          '--sp-syntax-fontStyle-property': 'normal',
          '.cm-lineNumbers': { fontSize: 'sm!' },
        }}
        style={{ flexDirection: 'row' }}
        height='full'
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
    </>
  )
}

export default SandpackEditor
