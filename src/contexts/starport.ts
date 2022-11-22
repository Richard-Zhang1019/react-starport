import { createContext } from 'react'

interface starportProps {
  metaData: any
  setMetaData: any
  proxyElArr: any
  setProxyElArr: any
  landedMap: any
  setLandedMap: any
}

export default createContext({} as Partial<starportProps>)
