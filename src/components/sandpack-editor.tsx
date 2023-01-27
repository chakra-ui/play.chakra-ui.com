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
        style={{ flexDirection: 'row' }}
        height='full'
      >
        <Box
          as='span'
          flex='1'
          height='100%'
          position='relative'
          className='group'
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
