import React,{useEffect} from 'react'
import { fetchUsers } from '../users/userSlice'
import { useDispatch,useSelector } from 'react-redux'
function Users() {

    const dispatch = useDispatch()

    const users = useSelector((state)=> state.user)

    useEffect(()=>{

        dispatch(fetchUsers())

    },[])

  return (
    <div>
        <h1>List of Users</h1>

        {users.loading && <div>Loading...</div>}
        {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
        {
            !users.loading && users.users.length ? (
                <ul>
                    {
                         users.users.map((user)=>(
                            <li key={user.id}>{user.name}</li>
                         ))
                    }
                   
                </ul>
            ):null
        }
    </div>
  )
}

export default Users