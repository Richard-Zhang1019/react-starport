import { FC, useState } from 'react'
import { Box, Flex, Img } from '@chakra-ui/react'

interface ImageProps {
  src: string
}

const Image: FC<ImageProps> = ({ src }) => {
  const [counter, setCounter] = useState(0)

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      position="relative"
      cursor="pointer"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom="0"
        color="white"
        onClick={e => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </Box>
      <Img w="100%" h="100%" src={src} />
    </Flex>
  )
}

export default Image
