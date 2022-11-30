import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import FloatProxy from '@/components/FloatProxy'
import MyButton from '@/components/MyButton'
import useIsEnglish from '@/hooks/useIsEnglish'

const List = () => {
  const [listA, setListA] = useState([1, 3, 5, 7, 9])
  const [listB, setListB] = useState([2, 4, 6, 8, 10])
  const [size, setSize] = useState(false)
  const navigate = useNavigate()
  const isEnglish = useIsEnglish()

  return (
    <Flex
      maxW="1420px"
      m="auto"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Flex gap={20}>
        <MyButton onClick={() => setSize(!size)}>
          {isEnglish ? 'toggle size' : '改变尺寸'}
        </MyButton>
        <MyButton onClick={() => navigate('/')}>
          {isEnglish ? 'go normal' : '返回'}
        </MyButton>
      </Flex>
      <Flex gap={50}>
        <Box>
          {listA.map(item => {
            return (
              <FloatProxy
                key={item}
                id={item}
                w={size ? '15rem' : '16rem'}
                h={size ? '12rem' : '9rem'}
                m={size ? 15 : 0}
                borderRadius={size ? '15px' : 0}
                overflow="hidden"
                cursor="pointer"
                onClick={() => {
                  setListA(listA.filter(i => i !== item))
                  setListB([...listB, item])
                }}
              />
            )
          })}
        </Box>
        <Box>
          {listB.map(item => {
            return (
              <FloatProxy
                key={item}
                id={item}
                w={size ? '15rem' : '16rem'}
                h={size ? '12rem' : '9rem'}
                m={size ? 15 : 0}
                borderRadius={size ? '15px' : 0}
                cursor="pointer"
                overflow="hidden"
                onClick={() => {
                  setListA([...listA, item])
                  setListB(prev => prev.filter(i => i !== item))
                }}
              />
            )
          })}
        </Box>
      </Flex>
    </Flex>
  )
}

export default List
