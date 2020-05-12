import React, { useState, useEffect } from 'react'
import Form from './Form'
import UserList from './UserList'
import axios from 'axios'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup.string().required('Please enter name'),
  email: yup.string().email('Must be a valid email').required('Please enter your email address'),
  password: yup.string().min(7, 'Password must include at least 7 characters').required('Please enter your password'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms to continue'),

})


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: '',
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

