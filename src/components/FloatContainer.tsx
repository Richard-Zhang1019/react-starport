import { FC, ReactElement, useState } from 'react'

interface FloatContainerProps {
  slot: ReactElement
  port: string
}

const FloatContainer: FC<FloatContainerProps> = ({ slot, port }) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      FloatContainer
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <div>{slot}</div>
    </div>
  )
}

export default FloatContainer
