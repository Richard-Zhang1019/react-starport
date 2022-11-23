import { useContext } from 'react'
import ThemeContext from '@/contexts/themeColor'

export default () => {
  const { themeColor } = useContext(ThemeContext)
  return themeColor === 'theme-dark' ? true : false
}
