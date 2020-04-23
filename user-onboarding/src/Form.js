import React from 'react';

function Form(props) {
  const {
    onInputChange,
    values
  } = props
  
  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='errors'></div>

      <label>Username:&nbsp;<input name='username'
      type='text'
      values={values.username}
      onChange={onInputChange}
      /></label>
      

      <label>Email:&nbsp;<input name='email'
      type='text'
      values={values.email}
      onChange={onInputChange}/></label>
      

      <label>Password:&nbsp;<input name='password'
      type='text'
      values={values.password}
      onChange={onInputChange}/></label>
      

      <label>Terms of Service:&nbsp;<input name='terms'
      type='checkbox'
      values={values.terms}
      onChange={onInputChange}/></label>
     

        <button>Submit</button>

    </form>
  )
}

export default Form