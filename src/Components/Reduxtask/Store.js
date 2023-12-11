import { configureStore } from '@reduxjs/toolkit'
import Slice  from './Slice'

export const g=configureStore({
  reducer: {
    data: Slice
  },
})
