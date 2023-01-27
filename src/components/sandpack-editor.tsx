import { Box } from '@chakra-ui/react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
} from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import { useRef } from 'react'
import { CopyButton } from './copy-button'
import EditorTabs from './editor-tabs'

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
          <EditorTabs codemirrorInstance={codemirrorInstance} />
          <SandpackCodeEditor
            ref={codemirrorInstance}
            showRunButton={false}
            showLineNumbers
            showTabs={false}
            style={{ height: '100%' }}
          />
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
