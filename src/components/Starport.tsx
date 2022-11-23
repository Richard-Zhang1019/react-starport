import { FC, ReactNode, useState } from 'react'
import StarportContext from '@/contexts/starport'
import { KeepAliveScope } from './KeepAliveScope'

interface StarportProps {
  children: ReactNode
}

const Starport: FC<StarportProps> = ({ children }) => {
  const [metaData, setMetaData] = useState({})
  const [proxyList, setProxyList] = useState([])
  const [landedMap, setLandedMap] = useState({})
  const starportContext = {
    metaData,
    setMetaData,
    proxyList,
    setProxyList,
    landedMap,
    setLandedMap
  }

  return (
    <StarportContext.Provider value={starportContext}>
      <KeepAliveScope>{children}</KeepAliveScope>
      {/* {children} */}
    </StarportContext.Provider>
  )
}

export default Starport
