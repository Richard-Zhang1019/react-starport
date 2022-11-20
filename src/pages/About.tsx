import Button from '@/components/Button'
import { Box, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <Flex alignItems="center" direction="column">
      <Button onClick={() => navigate('/')}>Back</Button>
      <Box w="50%">about</Box>
    </Flex>
  )
}

export default About
