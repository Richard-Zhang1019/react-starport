import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import Router from '@/router'
import ThemeColor from '@/contexts/themeColor'
import Starport from '@/contexts/starport'

function App() {
  const [themeColor, setThemeColor] = useState('theme-light')
  const themeColorContext = {
    themeColor,
    setThemeColor
  }

  const [metaData, setMetaData] = useState({})
  const starportContext = {
    metaData,
    setMetaData
  }

  return (
    <ThemeColor.Provider value={themeColorContext}>
      <Starport.Provider value={starportContext}>
        <Box className="App" minH="100vh" pb={15}>
          <Header />
          {useRoutes(Router)}
        </Box>
      </Starport.Provider>
    </ThemeColor.Provider>
  )
}

export default App
