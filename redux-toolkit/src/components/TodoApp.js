import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todoSlice'

function TodoApp() {

    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}
                    placeholder='enter todo'
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type='submit'>Add ToDO</button>
        </form>
    </div>
  )
}

export default TodoApp