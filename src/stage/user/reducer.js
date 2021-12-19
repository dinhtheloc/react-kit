import { createReducer } from '@reduxjs/toolkit'
import {
    toggleTheme
} from './action'

export const initialState = {
    isDark: false
}

export default createReducer(initialState, (builder) =>
    builder
        .addCase(toggleTheme, (state) => {
            state.isDark = !state.isDark
        })
)