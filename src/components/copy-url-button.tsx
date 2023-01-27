import { Box, Icon, IconButton, Tooltip } from '@chakra-ui/react'
import { useState } from 'react'
import { BiCopy } from 'react-icons/bi'

import { useUrlSync } from '../hooks/use-url-sync'

const CopyUrlButton = () => {
  const { codeUrl } = useUrlSync()
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(codeUrl)

    setTimeout(() => {
      setIsCopied(false)
    })
  }

  return (
    <Box pos='absolute' zIndex={1} right={4} bottom={4}>
      <Tooltip label={isCopied ? 'Copied!' : 'Copy'} aria-label='Copy Url'>
        <IconButton
          colorScheme='teal'
          aria-label='Copy Url button'
          icon={<Icon as={BiCopy} />}
          onClick={handleCopy}
        />
      </Tooltip>
    </Box>
  )
}

export default CopyUrlButton
