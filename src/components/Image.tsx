import { FC, useState } from 'react'
import { Box, Img } from '@chakra-ui/react'

interface ImageProps {
  src: string
}

const Image: FC<ImageProps> = ({ src }) => {
  const [counter, setCounter] = useState(0)

  return (
    <Box position="relative" w="100%" h="100%">
      <Box
        position="absolute"
        w={20}
        textAlign="center"
        bottom="0"
        left="50%"
        right="50%"
        transform="translateX(-50%)"
        color="white"
        onClick={e => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </Box>
      <Img objectFit="cover" w="100%" h="100%" src={src} />
    </Box>
  )
}

export default Image
