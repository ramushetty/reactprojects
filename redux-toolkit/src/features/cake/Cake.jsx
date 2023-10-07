import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,reStock } from './cakeSlice'

function Cake() {

    const [cake,setCake] = useState(0)
    const numcake = useSelector((state)=>state.cake.numberOfCake)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        return dispatch(ordered())
    }
    const handleRestock = () => {
        return dispatch(reStock(5))
    }
  return (
    <div>
        <h1>Number of Cakes - {numcake}</h1>
        <button onClick={handleClick}>Order Cake</button>
        <button onClick={handleRestock}>Restock Cakes</button>

    </div>
  )
}

export default Cake