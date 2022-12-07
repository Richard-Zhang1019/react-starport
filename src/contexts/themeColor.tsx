import { createContext, Dispatch, SetStateAction } from 'react'

interface ThemeColorContextProps {
  themeColor: string
  setThemeColor: Dispatch<SetStateAction<string>>
  showBgColor: boolean
  setShowBgColor: Dispatch<SetStateAction<boolean>>
}

export default createContext({} as ThemeColorContextProps)
