import { createContext, ReactElement } from 'react'

interface getPortalElement {
  getPortalElement: (id: number, children: ReactElement) => HTMLElement
}

export default createContext({} as getPortalElement)
