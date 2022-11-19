import { Box, Flex, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import imgList from '@/constants/imgList'
import Logo from '@/assets/img/logo.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Flex
      direction="column"
      alignItems="center"
      w={1520}
      justifyContent="center"
      mx="auto"
      mb={100}
    >
      <Img width={300} src={Logo} />
      <Box pb={20} fontSize={18}>
        🛰Shared component across routes with animations
      </Box>
      <Box
        bgColor="rgb(82,119,191)"
        color="white"
        fontSize={16}
        my={10}
        p={3}
        px={10}
        rounded="5px"
        cursor="pointer"
      >
        toggle
      </Box>
      <Flex wrap="wrap" justifyContent="center" gap={15}>
        {imgList.map((item, index) => {
          return (
            <Box key={index} className="home-img-container" cursor="pointer">
              <Img
                src={item}
                rounded="12px"
                onClick={() => {
                  navigate(`/about/${index + 1}`)
                }}
              />
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Home
