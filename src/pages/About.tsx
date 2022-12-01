import { useNavigate, useParams } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import MyButton from '@/components/MyButton'
import useIsEnglish from '@/hooks/useIsEnglish'
import FloatProxy from '@/components/FloatProxy'

const About = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [size, setSize] = useState(false)
  const isEnglish = useIsEnglish()

  return (
    <Flex
      minH="100vh"
      maxW="1420px"
      alignItems="center"
      direction="column"
      mx="auto"
      pt={50}
    >
      <Flex gap={20}>
        <MyButton onClick={() => navigate(-1)}>
          {isEnglish ? 'Back' : '返回'}
        </MyButton>
        <MyButton onClick={() => setSize(!size)}>
          {isEnglish ? 'toggle size' : '改变尺寸'}
        </MyButton>
      </Flex>
      <Box m={20} fontWeight={500}>
        {isEnglish ? 'try to click on the number' : '点击数字试试'}
      </Box>
      <Flex h={250} w={760} mt={20} justifyContent="space-between">
        <FloatProxy
          id={id!}
          overflow="hidden"
          borderRadius="50%"
          w={size ? 250 : 200}
          h={size ? 250 : 200}
        />
        <Box w={400} ml={100}>
          我们在不同的页面使用同一个组件时可能会由于页面布局不同，UI
          设计不同导致相同组件的位置、大小、样式、状态等不同，这时我们可能会希望在进行路由跳转时让两个页面使用的相同的组件有一个过渡动画直接将相同的组件流畅的传递过去,
          但是DOM结构以树的形式呈现，在不同路由下的组件有着不同的节点，即使在不同路由下使用相同的组件时也会创建两个组件实例,在
          pageA 和
          pageB两个路由下都使用了ComponentA组件，那么就会在两个页面创建两次组件实例
        </Box>
      </Flex>
      <Flex w={760} mt={20} justifyContent="space-between">
        <Box w={400} mr={100}>
          当我们从pageA路由跳转到
          pageB路由后会不可避免的经历组件的卸载和重新挂载，执行组建的生命周期，而跳转前组件内的状态也会丢失。
          尽管我们可以通过 context
          或者一些全局状态管理工具来存储组件里的一些状态，并且也可以通过FLIP来模拟不同组件之间的动画，但是这种实现还是不够优雅，因为同一个组件还是会渲染两次，还是要经历组件卸载和重新挂载的生命周期
        </Box>
        <FloatProxy
          id={Number(id) + 3 > 10 ? Number(id) + 3 - 10 : Number(id) + 3}
          overflow="hidden"
          borderRadius="50%"
          w={size ? 250 : 200}
          h={size ? 250 : 200}
        />
      </Flex>
    </Flex>
  )
}

export default About
