import { FC, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

interface ImageProps {
  src: string
}

const Image: FC<ImageProps> = ({ src }) => {
  const [counter, setCounter] = useState(0)

  return (
    <Flex
      w={250}
      justifyContent="center"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      style={{
        aspectRatio: '16/9'
      }}
    >
      <Box
        position="absolute"
        bottom="0"
        left="1/2"
        color="white"
        onClick={e => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </Box>
      <img src={src} />
    </Flex>
  )
}

export default Image
