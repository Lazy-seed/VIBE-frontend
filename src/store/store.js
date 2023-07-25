import { configureStore } from '@reduxjs/toolkit'
import showMenuSlice from './slice/menu'

export const store = configureStore({
  reducer: {showMenuSlice},
})