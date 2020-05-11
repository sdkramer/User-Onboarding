import React from "react";

function Form(props) {
  const { onInputChange, values } = props;

  return (
    <form className="form-container">
      <p className="clearfix">
        <label>Username</label>
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
        <label>Email</label>
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
        <label>Password</label>
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
        <label>Terms of Service</label>
        <input
          className="input-field"
          name="terms"
          type="checkbox"
          values={values.terms}
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
