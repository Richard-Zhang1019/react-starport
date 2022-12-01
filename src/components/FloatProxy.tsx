import { memo, useContext, useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

import Starport from '@/contexts/starport'
import { metaDataItem, proxyListItem } from '@/types/types'

const FloatProxy = (props: Record<string, number>) => {
  const { setMetaData, setProxyList, landedMap } = useContext(Starport)
  const ref = useRef<HTMLDivElement>(null)

  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as DOMRect
    const style = { width, height }

    setMetaData &&
      setMetaData((prev: metaDataItem) => ({
        ...prev,
        [props.id]: {
          ...props,
          style
        }
      }))
  }

  useEffect(() => {
    // props改变时重新起飞
    landedMap && landedMap[props.id] && landedMap[props.id](false)
    update()
    window.addEventListener('resize', update)
    // 重新设置proxyList
    setProxyList &&
      setProxyList((prev: proxyListItem) => ({ ...prev, [props.id]: ref }))
    return () => {
      Promise.resolve().then(() => {
        landedMap && landedMap[props.id] && landedMap[props.id](false)
      })
      setProxyList &&
        setProxyList((prev: proxyListItem) => ({ ...prev, [props.id]: null }))
      window.removeEventListener('resize', update)
    }
  }, [props])

  return (
    // 将属性传递给div
    <Box ref={ref} {...props} />
  )
}

export default memo(FloatProxy)
