import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todoSlice"
import cakeSlicereducer from "../features/cake/cakeSlice"
import icecreamSicereducer from "../features/icecream/icecreamSice"
import userSlicereducer from "../features/users/userSlice"

 

export const store = configureStore({
    reducer:{
        cake:cakeSlicereducer,
        icecream:icecreamSicereducer,
        user:userSlicereducer

    }

}) 


export default store