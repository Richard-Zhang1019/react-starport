import Button from '@/components/Button'
import FloatProxy from '@/components/FloatProxy'
import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [size, setSize] = useState(250)

  return (
    <Flex alignItems="center" direction="column">
      <Button onClick={() => navigate('/')}>Back</Button>
      <FloatProxy
        id={id}
        overflow="hidden"
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </Flex>
  )
}

export default About
