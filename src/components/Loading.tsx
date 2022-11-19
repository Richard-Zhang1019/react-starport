import { Flex } from '@chakra-ui/react'
import { Spin } from 'antd'

const Loading = () => {
  return (
    <Flex className="page-blog" justifyContent="center" alignItems="center">
      <Spin tip="Loading..." size="large" />
    </Flex>
  )
}

export default Loading
