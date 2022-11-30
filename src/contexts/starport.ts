import { proxyListItem } from '@/types/types'
import { createContext } from 'react'

interface starportProps {
  metaData: any
  setMetaData: any
  proxyList: Record<number, proxyListItem>
  setProxyList: any
  landedMap: any
  setLandedMap: any
}

export default createContext({} as Partial<starportProps>)
