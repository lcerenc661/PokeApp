import { configureStore } from '@reduxjs/toolkit'
import shinySlice from '../features/shinnyToggle/shinyToggle'

export const store = configureStore({
    reducer: { shiny: shinySlice },
})