import { FC, ReactElement } from 'react'

interface FloatContainerProps {
  slot: ReactElement
  port: string
}

const FloatContainer: FC<FloatContainerProps> = ({ slot, port }) => {
  return <div>FloatContainer</div>
}

export default FloatContainer
