import { FC, ReactNode, useState } from 'react'
import StarportContext from '@/contexts/starport'

interface StarportProps {
  children: ReactNode
}

const Starport: FC<StarportProps> = ({ children }) => {
  const [metaData, setMetaData] = useState({})
  const starportContext = {
    metaData,
    setMetaData
  }

  return (
    <StarportContext.Provider value={starportContext}>
      {children}
    </StarportContext.Provider>
  )
}

export default Starport
