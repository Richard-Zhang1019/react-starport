import { createContext, Dispatch, SetStateAction } from 'react'

interface LanguageContextProps {
  language: 'English' | 'Chinese'
  setLanguage: Dispatch<SetStateAction<'English' | 'Chinese'>>
}

export default createContext({} as LanguageContextProps)
