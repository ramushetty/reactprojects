import  {createSlice}  from "@reduxjs/toolkit"
import { ordered } from "../cake/cakeSlice"

const initialState = {
    numberOfIcrecreams:200
}
const icecreamSlice = createSlice({
    name: "icecream",
    initialState: initialState,
    reducers: {
        orderedIcecream:(state)=>{
            state.numberOfIcrecreams--
        },
        restocked: (state,action) =>{
            state.numberOfIcrecreams = state.numberOfIcrecreams+action.payload
        }
        
    },

    extraReducers: builder => {
        builder.addCase(ordered,(state,action)=>{
            state.numberOfIcrecreams--
        })
    }
})

export default icecreamSlice.reducer
export const {orderedIcecream,restocked} = icecreamSlice.actions