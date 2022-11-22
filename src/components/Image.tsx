import { Flex } from '@chakra-ui/react'
import { FC, useState } from 'react'

interface ImageProps {
  src: string
}

const Image: FC<ImageProps> = ({ src }) => {
  const [size, setSize] = useState(false)

  return (
    <Flex
      cursor="pointer"
      w={250}
      rounded={size ? '12px' : 0}
      transition="all 800ms"
      style={{
        aspectRatio: size ? '5/4' : '16/9'
      }}
      overflow="hidden"
      justifyContent="center"
    >
      <img src={src} />
    </Flex>
  )
}

export default Image
