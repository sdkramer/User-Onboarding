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
  username: '',
  email: '',
  password: '',
  terms: false,
}

function App() {

  const [users, setUsers] = useState(initialUserList)

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = event => {
    debugger
setFormValues(event.target.value)
  }


  return (
    <div className="container-div">
      <header><h1>User Application</h1></header>
      
      <Form 
      onInputChange={onInputChange}/>

      <UserList />
 
    </div>
  );
}

export default App;

