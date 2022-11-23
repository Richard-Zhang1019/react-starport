import { memo, useContext, useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

import Starport from '@/contexts/starport'

const FloatProxy = (props: any) => {
  const { setMetaData, setProxyList, landedMap } = useContext(Starport)
  const ref = useRef<HTMLDivElement>(null)

  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as DOMRect
    const style = { width, height }

    setMetaData((prev: any) => ({
      ...prev,
      [props.id]: {
        ...props,
        style
      }
    }))
  }

  useEffect(() => {
    // props改变时重新起飞
    landedMap[props.id] && landedMap[props.id](false)
    update()
    window.addEventListener('resize', update)
    // 重新设置proxyList
    setProxyList((prev: any) => ({ ...prev, [props.id]: ref }))
    return () => {
      Promise.resolve().then(() => {
        landedMap[props.id] && landedMap[props.id](false)
      })
      setProxyList((prev: any) => ({ ...prev, [props.id]: null }))
      window.removeEventListener('resize', update)
    }
  }, [props])

  return (
    // 将属性传递给div
    <Box ref={ref} {...props} />
  )
}

export default memo(FloatProxy)
