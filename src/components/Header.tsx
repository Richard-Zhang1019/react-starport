import { Box, Flex } from '@chakra-ui/layout'
import { useNavigate } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
import { useContext } from 'react'
import AyuLightImg from '@/assets/img/ayu-light.png'
import AyuDarkImg from '@/assets/img/ayu-dark.png'
import { Img } from '@chakra-ui/react'
import ThemeColorContext from '@/contexts/themeColor'

const Header = () => {
  const navigate = useNavigate()
  const { themeColor, setThemeColor } = useContext(ThemeColorContext)

  const toggleThemeColor = () => {
    let currentTheme = themeColor
    themeColor === 'theme-dark'
      ? (currentTheme = 'theme-light')
      : (currentTheme = 'theme-dark')
    toggleTheme({
      scopeName: currentTheme
    })
    setThemeColor(currentTheme)
  }

  return (
    <Flex
      h={60}
      px={10}
      justifyContent="space-between"
      alignItems="center"
      fontSize={18}
    >
      <Box
        px={4}
        cursor="pointer"
        onClick={() => {
          navigate('/')
        }}
      >
        <Img
          src={themeColor === 'theme-dark' ? AyuLightImg : AyuDarkImg}
          opacity={0.8}
          _hover={{ opacity: 1 }}
          color="white"
          w={50}
          h={50}
        />
      </Box>

      <Flex gap={10}>
        <Box cursor="pointer" onClick={toggleThemeColor}>
          {themeColor === 'theme-dark' ? (
            <BsFillSunFill size={22} />
          ) : (
            <BsFillMoonStarsFill size={22} />
          )}
        </Box>

        <Box
          cursor="pointer"
          onClick={() => {
            window.open('https://github.com/Ayu-1019', 'blank')
          }}
        >
          <AiFillGithub size={22} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
