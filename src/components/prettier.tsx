import { Button } from '@chakra-ui/react'
import { useActiveCode, useSandpack } from '@codesandbox/sandpack-react'
import { CodeMirrorRef } from '@codesandbox/sandpack-react/dist/types/components/CodeEditor/CodeMirror'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import { useCallback, useEffect, useState } from 'react'

type PrettierProps = {
  codemirrorInstance: React.RefObject<CodeMirrorRef>
}
export const Prettier = ({ codemirrorInstance }: PrettierProps) => {
  const [prettierCode, setPrettierCode] = useState<string | null>('')
  const { sandpack } = useSandpack()
  const activeCode = useActiveCode()

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      try {
        /**
         * I would recomend to run this process in a Worker
         */
        const formatted = prettier.format(activeCode.code, {
          parser: 'babel',
          plugins: [parserBabel],
        })

        setPrettierCode(formatted)
      } catch {}
    }
  }, [activeCode.code])

  //   /**
  //    * You need to find a proper trigger to run the Prettier,
  //    * for example in the VSCode is the save actions, and
  //    * I used a debounce on every change.
  //    */
  //   useEffect(() => {
  //     const debounce = setTimeout(runPrettier, 1000)
  //     return () => {
  //       clearInterval(debounce)
  //     }
  //   }, [runPrettier])

  useEffect(() => {
    if (prettierCode) {
      const cmInstance = codemirrorInstance.current?.getCodemirror()

      if (cmInstance) {
        const trans = cmInstance.state.update({
          selection: cmInstance.state.selection,
          changes: {
            from: 0,
            to: cmInstance.state.doc.length,
            insert: prettierCode,
          },
        })

        cmInstance.update([trans])
      }

      sandpack.updateFile(sandpack.activeFile, prettierCode)

      setPrettierCode(null)
    }
  }, [prettierCode])

  return (
    <Button
      borderRadius='0'
      onClick={runPrettier}
      variant='unstyled'
      fontSize='13px'
      fontWeight='light'
      px='2'
      color='var(--sp-colors-hover)'
      transition='color var(--sp-transitions-default), background var(--sp-transitions-default)'
      ml='auto !important'
    >
      Format code
    </Button>
  )
}
