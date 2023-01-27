import { Button, useClipboard } from '@chakra-ui/react'
import { useActiveCode } from '@codesandbox/sandpack-react'
import { useEffect } from 'react'

export const CopyButton = () => {
  const { code } = useActiveCode()
  const { setValue, hasCopied, onCopy } = useClipboard(code)
  useEffect(() => {
    setValue(code)
  }, [code])

  return (
    <Button
      size='sm'
      position='absolute'
      textTransform='uppercase'
      colorScheme='teal'
      fontSize='xs'
      height='24px'
      top={0}
      zIndex='1'
      right='1.25em'
      onClick={onCopy}
    >
      {hasCopied ? 'Copied!' : 'Copy'}
    </Button>
  )
}
