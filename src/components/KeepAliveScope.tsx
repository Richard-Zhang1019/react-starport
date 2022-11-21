import {
  Fragment,
  useContext,
  FC,
  ReactNode,
  ReactElement,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import AliveScope from '@/contexts/aliveScope'

interface AliveScopeProps {
  children: ReactNode
}

interface list {
  children: ReactNode
  element: HTMLElement
}

export const KeepAliveScope: FC<AliveScopeProps> = ({ children }) => {
  // 存储children
  const [list, setList] = useState<Record<string, list>>()
  const getPortalElement = (id: string, children: ReactElement) => {
    // 不存在则添加进去
    if (!list![id]) {
      const element = document.createElement('div')
      element.style.width = '100%'
      element.style.height = '100%'

      setList(prev => ({
        ...prev,
        [id]: { children, element }
      }))
      return element
    }
    return list![id].element
  }

  const aliveScopeContext = {
    getPortalElement
  }

  return (
    <AliveScope.Provider value={aliveScopeContext}>
      {children}
      {Object.entries(list!).map(([id, { children, element }]) => (
        <Fragment key={id}>{createPortal(children, element)}</Fragment>
      ))}
    </AliveScope.Provider>
  )
}

export const useAliveScope = () => useContext(AliveScope)
