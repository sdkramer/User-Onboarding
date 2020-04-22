import React from 'react';

function Form(props) {
  const {
    onInputChange,
  } = props
  
  return (
    <form className='container'>
      <div className='errors'></div>

      <label>Username:&nbsp;<input name='username'
      type='text'
      onChange={onInputChange}
      /></label>
      

      <label>Email:&nbsp;<input name='email'
      type='text'
      onChange={onInputChange}/></label>
      

      <label>Password:&nbsp;<input name='password'
      type='text'
      onChange={onInputChange}/></label>
      

      <label>Terms of Service:&nbsp;<input name='terms'
      type='checkbox'
      onChange={onInputChange}/></label>
     

        <button>Submit</button>

    </form>
  )
}

export default Form