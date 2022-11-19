import imgList from '@/constants/imgList'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <Flex wrap="wrap" justifyContent="center">
      {imgList.map(item => {
        return (
          <Box className="home-img-container">
            <img src={item} alt="" />
          </Box>
        )
      })}
    </Flex>
  )
}

export default Home
