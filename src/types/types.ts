export interface metaDataItemValue {
  [K: number]: Function | string | number
}

export type metaDataItem = Record<number, Record<string, metaDataItemValue>>

export type proxyListItem = Record<number, { current: HTMLElement }>

export type landedMapItem = Record<number, (value: boolean) => void>

export {}
