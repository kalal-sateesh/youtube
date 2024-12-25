import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sidebar : true,
};

export const HeaderSlice = createSlice({
    name : 'navbartoggle',
    initialState,
    reducers : {
        togglenavbar : (state)=>{
            state.sidebar = !state.sidebar;
        }
    }
})

export const {togglenavbar} = HeaderSlice.actions

export default HeaderSlice.reducer