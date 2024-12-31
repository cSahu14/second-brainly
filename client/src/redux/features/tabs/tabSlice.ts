import { createSlice } from "@reduxjs/toolkit"

export interface TabState {
    value: string
}

const initialState: TabState = {
    value: "home",
}

export const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
      
    }
})