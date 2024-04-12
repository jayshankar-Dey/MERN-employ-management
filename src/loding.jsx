import {createSlice} from '@reduxjs/toolkit'


 const lodingSlice=createSlice({
    name:"loding",
    initialState:{
        loding:false
    },
    reducers:{
        showloding:(state)=>{
            state.loding=true
        },
        hideloding:(state)=>{
            state.loding=false
        }
    }
})

export default lodingSlice.reducer;
export const {showloding,hideloding}=lodingSlice.actions;
