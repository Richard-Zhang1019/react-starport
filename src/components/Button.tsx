import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Box
      bgColor="rgb(82,119,191)"
      color="white"
      fontSize={16}
      my={10}
      w="fit-content"
      h={30}
      lineHeight="25px"
      px={10}
      rounded="5px"
      cursor="pointer"
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default Button
