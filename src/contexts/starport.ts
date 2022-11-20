import { createContext, Dispatch, SetStateAction } from 'react'

interface starportProps {
  metaData?: any
  setMetaData?: any
}

export default createContext({} as starportProps)
