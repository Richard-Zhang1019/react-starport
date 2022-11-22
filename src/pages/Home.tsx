import { useState } from 'react'
import { Box, Flex, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import imgList from '@/constants/imgList'
import Logo from '@/assets/img/logo.png'
import Button from '@/components/Button'

const Home = () => {
  const navigate = useNavigate()
  const [size, setSize] = useState(false)

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxW="1480px"
      justifyContent="center"
      mx="auto"
      mb={100}
    >
      <Img width={300} src={Logo} />
      <Box pb={20} fontSize={18}>
        🛰 Shared component across routes with animations
      </Box>
      <Button onClick={() => setSize(!size)}>toggle</Button>
      <Flex
        wrap="wrap"
        justifyContent="center"
        gap={size ? 15 : 0}
        transition="all 800ms"
      >
        {imgList.map((item, index) => {
          return (
            <Flex
              key={index}
              cursor="pointer"
              w={250}
              rounded={size ? '12px' : 0}
              transition="all 800ms"
              style={{
                aspectRatio: size ? '5/4' : '16/9'
              }}
              overflow="hidden"
              justifyContent="center"
              onClick={() => {
                navigate(`/about/${index + 1}`)
              }}
            >
              <Img src={item} />
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Home
