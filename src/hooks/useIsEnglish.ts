import { useContext } from 'react'
import LanguageContext from '@/contexts/language'

export default () => {
  const { language } = useContext(LanguageContext)
  return language === 'English' ? true : false
}
