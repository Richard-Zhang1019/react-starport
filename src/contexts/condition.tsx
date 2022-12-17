import { createContext, Dispatch, SetStateAction } from 'react'

interface ConditionContextProps {
  size: boolean
  setSize: Dispatch<SetStateAction<boolean>>
  reversal: boolean
  setReversal: Dispatch<SetStateAction<boolean>>
}

export default createContext({} as ConditionContextProps)
