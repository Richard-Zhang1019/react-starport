import { FC, useState } from 'react'
import { Box, Img } from '@chakra-ui/react'

import { useLocation } from 'react-router-dom'

interface ImageProps {
  src: string
  reversalSrc: string
}

const Image: FC<ImageProps> = ({ src, reversalSrc }) => {
  const [counter, setCounter] = useState(0)
  const [isReversal, setIsReversal] = useState(true)
  const location = useLocation()

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      cursor="pointer"
      transition="all 900ms"
      onClick={() =>
        location.pathname.includes('/about/') && setIsReversal(!isReversal)
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
      <Img
        objectFit="cover"
        w="100%"
        h="100%"
        src={isReversal ? src : reversalSrc}
      />
      {/* <Img
        objectFit="cover"
        w="100%"
        h="100%"
        src={src}
        transition="all 1s"
        transform={isReversal ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        // _hover={
        //   location.pathname.includes('/about/')
        //     ? {
        //         transform: 'rotateY(180deg)'
        //       }
        //     : {}
        // }
        style={
          {
            // backfaceVisibility: 'hidden'
          }
        }
      />
      <Img
        objectFit="cover"
        w="100%"
        h="100%"
        src={reversalSrc}
        transition="all 1s"
        transform={isReversal ? 'rotateY(0deg)' : 'rotateY(180deg)'}
        style={
          {
            // backfaceVisibility: 'hidden'
          }
        }
        // _hover={
        //   location.pathname.includes('/about/')
        //     ? {
        //         transform: 'rotateY(180deg)'
        //       }
        //     : {}
        // }
      /> */}
    </Box>
  )
}

export default Image
