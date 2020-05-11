import React, { useState } from 'react'

function UserList (props){
  // console.log(props.users.email)
 
  return (
    <div className='form-container user-container'>
      {Object.values(props).map(user => (
        <div className='details' key={user.password}>
          <h2>Name:{user.username} </h2>
          <p>Email:{user.email} </p>
          <p>Password:{user.password} </p>
        </div>
      ))}
    </div>)
}

export default UserList