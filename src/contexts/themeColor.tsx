import { createContext, Dispatch, SetStateAction } from 'react'

interface ThemeColorContextProps {
  themeColor: string
  setThemeColor: Dispatch<SetStateAction<string>>
}

export default createContext({} as ThemeColorContextProps)
