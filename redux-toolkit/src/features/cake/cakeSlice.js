import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    numberOfCake : 100
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers: {
        ordered: (state,action) => {
            state.numberOfCake--
        },
        reStock: (state,action) => {
            state.numberOfCake = state.numberOfCake+action.payload
        }
    }
})


export default cakeSlice.reducer

export const {ordered,reStock} = cakeSlice.actions