
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const URL = "https://jsonplaceholder.typicode.com/users";
export default function RestApp() {
    // initialize the state
    const [users,setUsers]= useState([])

    //load the API during onLoad
    useEffect(()=>{
        axios.get(URL)
        .then(res => res.data)
        .then(data =>{
            setUsers(data)
        })

    },[])
  return (
    <div className="container">
        <p>User Data</p>

        {users.map((user) => (
          <div>
            {user.name} --- {user.email}
          </div>
        ))}
      </div>
  )
}
