import { createContext, Dispatch, SetStateAction } from 'react'
import { metaDataItem, proxyListItem, landedMapItem } from '@/types/types'

interface starportProps {
  metaData: metaDataItem
  setMetaData: Dispatch<SetStateAction<metaDataItem>>
  proxyList: proxyListItem
  setProxyList: Dispatch<SetStateAction<{}>>
  landedMap: landedMapItem
  setLandedMap: Dispatch<SetStateAction<landedMapItem>>
}

export default createContext({} as Partial<starportProps>)
