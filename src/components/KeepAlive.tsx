import { Box } from '@chakra-ui/react'
import { useRef, useEffect, ReactNode, FC } from 'react'
import { useAliveScope } from './KeepAliveScope'

interface KeepAliveProps {
  id: string
  children: ReactNode
}

const KeepAlive: FC<KeepAliveProps> = ({ id, children }) => {
  const getPortalElement = useAliveScope()
  const keepAliveRef = useRef<HTMLDivElement>(null)

  const insertPortalElement = () => {
    // 根据id获取到缓存的element
    const portalElement = getPortalElement(id, children)
    // 插入到div中
    keepAliveRef.current!.appendChild(portalElement)
  }
  useEffect(() => {
    insertPortalElement()
  }, [])

  return <Box w="100%" h="=100%" ref={keepAliveRef} />
}

export default KeepAlive
