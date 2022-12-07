import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import Router from '@/router'
import ThemeColor from '@/contexts/themeColor'
import Language from '@/contexts/language'
import Starport from '@/components/Starport'
import imgList from './constants/imgList'
import FloatContainer from './components/FloatContainer'
import Image from '@/components/Image'

function App() {
  const [themeColor, setThemeColor] = useState('theme-light')
  const [showBgColor, setShowBgColor] = useState(false)
  const themeColorContext = {
    themeColor,
    setThemeColor,
    showBgColor,
    setShowBgColor
  }

  const [language, setLanguage] = useState<'English' | 'Chinese'>('English')
  const languageContext = {
    language,
    setLanguage
  }

  return (
    <ThemeColor.Provider value={themeColorContext}>
      <Language.Provider value={languageContext}>
        <Box className="App" minH="100vh" pb={15}>
          <Starport>
            <Header />
            {useRoutes(Router)}
            <Box>
              {imgList.map((item, index) => {
                return (
                  <FloatContainer
                    id={index + 1 + ''}
                    key={index}
                    slot={<Image src={item} />}
                  />
                )
              })}
            </Box>
          </Starport>
        </Box>
      </Language.Provider>
    </ThemeColor.Provider>
  )
}

export default App
