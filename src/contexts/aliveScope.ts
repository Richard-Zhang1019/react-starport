import { createContext, ReactElement } from 'react'

interface getPortalElement {
  getPortalElement: (id: string, children: ReactElement) => HTMLElement
}

export default createContext({} as getPortalElement)
