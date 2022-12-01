export interface metaDataItemValue {
  [K: string]: Function | string | number
}

export type metaDataItem = Record<string, Record<string, metaDataItemValue>>

export type proxyListItem = Record<string, { current: HTMLElement }>

export type landedMapItem = Record<string, (value: boolean) => void>

export {}
