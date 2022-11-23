import { createContext, CSSProperties } from 'react'

interface starportProps {
  metaData: any
  setMetaData: any
  proxyList: any
  setProxyList: any
  landedMap: any
  setLandedMap: any
}

export default createContext({} as Partial<starportProps>)
