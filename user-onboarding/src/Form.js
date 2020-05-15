import React from "react";

function Form(props) {
  const { onInputChange, values, onSubmit, errorState } = props;

  return (
    <form className="form-container" onSubmit = {onSubmit}>
      <p className="clearfix">
        <label htmlFor='username'>Username
        {errorState.username.length > 0 ? (<p className='error'>{errorState.username}</p>): null}
        </label>
        <input
          className="input-field"
          name="username"
          type="text"
          placeholder="Username"
          values={values.username}
          onChange={onInputChange}
        />

      </p>
      <p className="clearfix">
        <label htmlFor='email'>Email
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
        </label>
        <input
          className="input-field"
          name="email"
          type="text"
          placeholder="Email"
          values={values.email}
          onChange={onInputChange}
        />   
      </p>
      <p className="clearfix">
        <label htmlFor='password'>Password
        {errorState.password.length > 0 ? (
          <p className="error">{errorState.password}</p>): null}
        </label>
        <input
          className="input-field"
          name="password"
          type="text"
          placeholder="Password"
          values={values.password}
          onChange={onInputChange}
        />
      </p>
      <p className="clearfix check">
        <label htmlFor='terms'>Terms of Service
        {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}
        </label>
        <input
          className="input-field"
          name="terms"
          type="checkbox"
          checked={values.terms}
          onChange={onInputChange}
          value={values.terms}
        />
      </p>
      <p className="clearfix">
        <button>Submit</button>
      </p>
    </form>
  );
}

export default Form;
