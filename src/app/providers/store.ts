import { createContext } from 'react'

export const Store = createContext<{
  [key: string]: any
}>({})
