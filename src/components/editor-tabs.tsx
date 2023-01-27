import { Box, Button, HStack } from '@chakra-ui/react'
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  useSandpack,
} from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import { useEffect, useRef } from 'react'
import { FILES_TO_EXCLUDE } from '../constants/sandpack'
import { CopyButton } from './copy-button'
import { Prettier } from './prettier'

type EditorTabsProps = {
  codemirrorInstance: React.RefObject<CodeMirrorRef>
}

const EditorTabs = ({ codemirrorInstance }: EditorTabsProps) => {
  const { sandpack } = useSandpack()
  const { files, activeFile: activeFileKey, setActiveFile } = sandpack

  const activeFile = files[activeFileKey]

  const editableFiles = Object.entries(files).filter(
    ([fileName, file]) => !file.hidden && !FILES_TO_EXCLUDE.includes(fileName)
  )

  useEffect(() => {
    const codemirror = codemirrorInstance.current?.getCodemirror()
    
  }, [])

  return (
    <HStack
      px='2'
      spacing='0'
      bg='var(--sp-colors-surface1)'
      borderBottom='1px solid var(--sp-colors-surface2)'
    >
      {editableFiles.map(([fileName, file]) => (
        <Button
          key={fileName}
          borderRadius='0'
          onClick={() => setActiveFile(fileName)}
          variant='unstyled'
          fontSize='13px'
          fontWeight='light'
          px='2'
          color='var(--sp-colors-clickable)'
          transition='color var(--sp-transitions-default), background var(--sp-transitions-default)'
          isActive={file.code === activeFile.code}
          _active={{
            color: 'teal.300',
            boxShadow: 'inset 0 -1px 0px 0px var(--chakra-colors-teal-500)',
          }}
          _hover={{
            color: 'var(--sp-colors-hover)',
          }}
        >
          {fileName.split('/')[1]}
        </Button>
      ))}
      <Prettier codemirrorInstance={codemirrorInstance} />
    </HStack>
  )
}

export default EditorTabs
