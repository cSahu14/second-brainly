import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface TabState {
    value: string
}

const initialState: TabState = {
    value: "Notes",
}

export const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
      setTab: (state, action: PayloadAction<string>) => {
        if(action.payload !== "Logout" && action.payload !== state.value) {
          state.value = action.payload;
        }else {
          return;
        }
        
      }
    }
})

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;