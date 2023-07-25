import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    showMenu: false,
    isLoading: false,
    error: null,
}

export const showMenuSlice = createSlice({
    name: 'showMenu',
    initialState,
    reducers: {
        setMenu: (state,action) => {
            state.showMenu = action.payload
        },

    },
})

export const { setMenu } = showMenuSlice.actions

export default showMenuSlice.reducer