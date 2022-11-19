import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useRoutes } from 'react-router-dom'

import Header from '@/components/Header'
import routes from '@/router'
import ThemeColor from '@/contexts/themeColor'

function App() {
  const [themeColor, setThemeColor] = useState('theme-light')
  const contextValue = {
    themeColor,
    setThemeColor
  }

  return (
    <ThemeColor.Provider value={contextValue}>
      <Box
        className="App"
        minH="100vh"
        overflowX="hidden"
        p={2}
        pr={10}
        pl={10}
      >
        <Header />
        {useRoutes(routes)}
      </Box>
    </ThemeColor.Provider>
  )
}

export default App
