import { Box } from '@chakra-ui/react'
import {
  FC,
  memo,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { useLocation } from 'react-router-dom'

import Starport from '@/contexts/starport'

interface FloatContainerProps {
  slot: ReactElement
  port: string
}

const FloatContainer: FC<FloatContainerProps> = ({ slot, port }) => {
  const location = useLocation()
  const { metaData, landedMap, proxyList } = useContext(Starport)
  const [landed, setLanded] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  const update = async () => {
    // 等待一个tick，确保dom已经渲染完成
    await Promise.resolve().then()
    setLanded(false)
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [location.pathname, metaData])

  return (
    <Box {...metaData[port]!} ref={ref}>
      <Box>{slot}</Box>
    </Box>
  )
}

export default memo(FloatContainer)
