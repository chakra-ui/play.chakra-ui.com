import { Box } from '@chakra-ui/react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import { useRef } from 'react'
import { CopyButton } from './copy-button'
import { Prettier } from './prettier'

const SandpackEditor = () => {
  const codemirrorInstance = useRef<CodeMirrorRef>(null)

  return (
    <>
      <Box
        as={SandpackLayout}
        sx={{
          position: 'relative',
          '--sp-layout-height': 'auto',
          '--sp-colors-disabled': 'colors.gray.700',
          '--sp-syntax-fontStyle-keyword': 'normal',
          '--sp-syntax-fontStyle-property': 'normal',
          '.cm-lineNumbers': { fontSize: 'sm!' },
          '[role=tab][data-active=true]': {
            '--shadow-color': 'colors.teal.500',
            color: 'teal.300',
            boxShadow: 'inset 0 -1px 0px 0px var(--shadow-color)',
          },
        }}
        flexDirection={{ base: 'column', md: 'row' }}
        height='full'
      >
        <Box
          as='span'
          flex='1'
          height='100%'
          maxWidth={{ base: '100%', md: '60%' }}
          position='relative'
          className='group'
          sx={{
            '.cm-scroller': {
              '&::-webkit-scrollbar': {
                height: '8px',
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.3)',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'whiteAlpha.300',
              },
            },
          }}
        >
          <SandpackCodeEditor
            ref={codemirrorInstance}
            showRunButton={false}
            showLineNumbers
            style={{ height: '100%' }}
          />
          <Prettier codemirrorInstance={codemirrorInstance} />
          <CopyButton />
        </Box>
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
