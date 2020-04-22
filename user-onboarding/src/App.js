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

const intialUserList = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

function App() {

  const [users, setUsers] = useState()

  const [formValues, setFormValues] = useState()

  const onInputChange = event => {

  }


  return (
    <div className="container-div">
      <header><h1>User Application</h1></header>
      
      <Form />

      <UserList />
 
    </div>
  );
}

export default App;

