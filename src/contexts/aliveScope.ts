import { createContext, ReactElement, ReactNode } from 'react'

interface getPortalElement {
  getPortalElement: (id: string, children: ReactNode) => ReactElement
}

export default createContext<any>({})
