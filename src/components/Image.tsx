import { FC, useContext, useState } from 'react'
import { Box, Img } from '@chakra-ui/react'

import Condition from '@/contexts/condition'
import { useLocation } from 'react-router-dom'

interface ImageProps {
  src: string
  reversal: string
}

const Image: FC<ImageProps> = ({ src, reversal }) => {
  console.log(reversal)
  const [counter, setCounter] = useState(0)
  const [isReversal, setIsReversal] = useState(true)
  const location = useLocation()

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      cursor="pointer"
      onClick={() =>
        location.pathname.includes('/about') && setIsReversal(!isReversal)
      }
    >
      <Box
        position="absolute"
        w={20}
        textAlign="center"
        bottom="0"
        left="50%"
        right="50%"
        transform="translateX(-50%)"
        color="white"
        cursor="pointer"
        onClick={e => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </Box>
      {isReversal ? (
        <Img objectFit="cover" w="100%" h="100%" src={src} />
      ) : (
        <Img objectFit="cover" w="100%" h="100%" src={reversal} />
      )}
    </Box>
  )
}

export default Image
