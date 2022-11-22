import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import Router from '@/router'
import ThemeColor from '@/contexts/themeColor'
import Starport from '@/components/Starport'
import imgList from './constants/imgList'
import FloatContainer from './components/FloatContainer'
import Image from '@/components/Image'

function App() {
  const [themeColor, setThemeColor] = useState('theme-light')
  const themeColorContext = {
    themeColor,
    setThemeColor
  }

  return (
    <ThemeColor.Provider value={themeColorContext}>
      <Starport>
        <Box className="App" minH="100vh" pb={15}>
          <Header />
          {useRoutes(Router)}
          {imgList.map((item, index) => {
            return (
              <FloatContainer
                key={index}
                slot={<Image src={item} />}
                port={index + 1 + ''}
              />
            )
          })}
        </Box>
      </Starport>
    </ThemeColor.Provider>
  )
}

export default App
