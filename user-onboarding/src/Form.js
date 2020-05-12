import React from "react";

function Form(props) {
  const { onInputChange, values } = props;

  return (
    <form className="form-container">
      <p className="clearfix">
        <label htmlFor='username'>Username</label>
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
        <label htmlFor='email'>Email</label>
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
        <label htmlFor='password'>Password</label>
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
        <label htmlFor='terms'>Terms of Service</label>
        <input
          className="input-field"
          name="terms"
          type="checkbox"
          checked={values.terms}
          onChange={onInputChange}
        />
      </p>
      <p className="clearfix">
        <button>Submit</button>
      </p>
    </form>
  );
}

export default Form;
