import { memo, useContext, useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

import Starport from '@/contexts/starport'
import ThemeColor from '@/contexts/themeColor'
import { metaDataItem, proxyListItem } from '@/types/types'

const FloatProxy = (props: Record<string, number | string | (() => void)>) => {
  const id = props.id as string
  const ref = useRef<HTMLDivElement>(null)
  const { setMetaData, setProxyList, landedMap } = useContext(Starport)
  const { showBgColor } = useContext(ThemeColor)

  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as DOMRect
    const style = { width, height }

    setMetaData &&
      setMetaData((prev: metaDataItem) => ({
        ...prev,
        [id]: {
          ...props,
          style
        }
      }))
  }

  useEffect(() => {
    // props改变时重新起飞
    landedMap && landedMap[id] && landedMap[id](false)
    update()
    window.addEventListener('resize', update)
    // 重新设置proxyList
    setProxyList &&
      setProxyList((prev: proxyListItem) => ({ ...prev, [id]: ref }))
    return () => {
      Promise.resolve().then(() => {
        landedMap && landedMap[id] && landedMap[id](false)
      })
      setProxyList &&
        setProxyList((prev: proxyListItem) => ({ ...prev, [id]: null }))
      window.removeEventListener('resize', update)
    }
  }, [props])

  return (
    // 将属性传递给div
    <Box ref={ref} {...props} bgColor={showBgColor ? '#5a76ba' : ''} />
  )
}

export default memo(FloatProxy)
