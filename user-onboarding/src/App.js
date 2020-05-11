import React, { useState, useEffect } from 'react'
import Form from './Form'
import UserList from './UserList'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialUserList = {
  username: 'Tim',
  email: 't@tim.com',
  password: 'af45g*o',
  terms: false,
}

const onSubmit = (event) => {
event.preventDefault()
}

function App() {

  const [users, setUsers] = useState(initialUserList)
 

  const [formValues, setFormValues] = useState(initialFormValues)
  console.log(formValues)
  const onInputChange = event => {
    const name = event.target.name
    const value = event.target.value
setFormValues({...formValues,
[name]: value})
  }


  return (
    <div className="container-div">
      <header><h1>User Application</h1></header>
      
      <Form 
        values={formValues}
        onInputChange={onInputChange}
      />

      <UserList 
        users={users}
      />
 
    </div>
  );
}

export default App;

