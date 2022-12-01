import {
  FC,
  memo,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'

import Starport from '@/contexts/starport'
import KeepAlive from './KeepAlive'
import { landedMapItem } from '@/types/types'

interface FloatContainerProps {
  id: number
  slot: ReactElement
}

const FloatContainer: FC<FloatContainerProps> = ({ id, slot }) => {
  const location = useLocation()
  const { metaData, setLandedMap, proxyList } = useContext(Starport)
  const [landed, setLanded] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  const timer: Record<number, number> = {}
  const defaultStyle = {
    opacity: '0',
    transform: 'translateY(-20px)'
  }

  useEffect(() => {
    // 注册setLanded函数
    setLandedMap &&
      setLandedMap((pre: landedMapItem) => ({ ...pre, [id]: setLanded }))
  }, [])
  const update = async () => {
    // 等待一个tick，确保dom已经渲染完成
    await Promise.resolve().then()
    setLanded(false)
    if (ref.current) {
      const style = ref.current.style
      const rect = proxyList && proxyList[id]?.current?.getBoundingClientRect()

      if (rect) {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop
        const scrollLeft =
          document.body.scrollLeft || document.documentElement.scrollLeft

        style.top = `${rect.top + scrollTop}px`
        style.left = `${rect.left + scrollLeft}px`
        style.opacity = '1'
        style.transform = 'none'
      } else {
        style.opacity = '0'
        style.transform = 'translateY(-20px) scale(0)'
        style.pointerEvents = 'none'
      }
    }
    clearTimeout(Number(timer[id]))
    timer[id] = setTimeout(() => {
      setLanded(true)
    }, 900)
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [location.pathname, metaData])

  return (
    <Box
      {...metaData![id]}
      m={0}
      position="absolute"
      transition="all 900ms"
      style={{
        ...defaultStyle,
        ...metaData![id]?.style
      }}
      ref={ref}
    >
      {metaData && metaData[id] && landed && proxyList![id]?.current ? (
        createPortal(
          <KeepAlive id={id}>{slot}</KeepAlive>,
          proxyList![id].current
        )
      ) : (
        <KeepAlive id={id}>{slot}</KeepAlive>
      )}
    </Box>
  )
}

export default memo(FloatContainer)
