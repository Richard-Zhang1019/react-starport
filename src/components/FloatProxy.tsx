import Starport from '@/contexts/starport'
import { Box } from '@chakra-ui/react'
import { CSSProperties, memo, useContext, useEffect, useRef } from 'react'

const FloatProxy = (props: any) => {
  const { setMetaData, setProxyList, setLandedMap } = useContext(Starport)
  const ref = useRef<HTMLDivElement>(null)

  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as DOMRect
    const style = { width, height }
    setMetaData((prev: CSSProperties) => ({
      ...prev,
      [props.id]: {
        ...props,
        style
      }
    }))
  }

  useEffect(() => {}, [props])

  return (
    // 将属性传递给div
    <Box ref={ref} {...props}>
      {props.id}
    </Box>
  )
}

export default memo(FloatProxy)
