import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    count :0
}

const userSlice = createSlice({
    name:"user",
    initialState: INITIAL_STATE,
    reducers:{
        // increment:(state)=>{
        //     console.log('state',state)
        // }
    }
    
})

// export const {increment} = userSlice.actions

export default userSlice.reducer