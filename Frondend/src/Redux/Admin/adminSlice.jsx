import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "./adminThunk";

const INITIAL_STATE = {
    jwttoken:localStorage.getItem('admin-token') ? JSON.parse(localStorage.getItem('admin-token')) : false,

    


}

const adminSlice = createSlice({
    name: 'admin',
    initialState: INITIAL_STATE,
    reducers:{
        adminLout:(state)=>{
            state.jwttoken = false
            localStorage.removeItem('admin-token')
        },
        serachUser:(state,action)=>{

        }
    },



    extraReducers:(builer) => {
        builer
           .addCase(adminLogin.fulfilled,(state,action)=>{
            const newtoken = action.payload
            state.jwttoken = newtoken
            localStorage.setItem('admin-token',JSON.stringify(newtoken))
           })
    }

})

export const {adminLout,serachUser} = adminSlice.actions

export default adminSlice.reducer;