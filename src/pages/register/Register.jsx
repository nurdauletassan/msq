import React, { useState } from "react";
import "./Register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Left Side */}
        <div className="left-side">
          <h1 className="login-title">PERSONAL DETAILS</h1>
          <form className="login-form">
            {/* E-mail Input */}
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="e-mail"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => !email && setEmailFocus(false)}
                required
              />
              {emailFocus && !email && (
                <span className="alert">Enter your e-mail address</span>
              )}
            </div>

            {/* Password Input */}
            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => !password && setPasswordFocus(false)}
                required
              />
              {passwordFocus && !password && (
                <span className="alert">Enter your password</span>
              )}
            </div>

            {/* Name Input */}
            <div className="form-group">
              <input
                type="text"
                id="name"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocus(true)}
                onBlur={() => !name && setNameFocus(false)}
                required
              />
              {nameFocus && !name && (
                <span className="alert">Enter your name</span>
              )}
            </div>

            {/* Surname Input */}
            <div className="form-group">
              <input
                type="text"
                id="surname"
                value={surname}
                placeholder="surname"
                onChange={(e) => setSurname(e.target.value)}
                onFocus={() => setSurnameFocus(true)}
                onBlur={() => !surname && setSurnameFocus(false)}
                required
              />
              {surnameFocus && !surname && (
                <span className="alert">Enter your surname</span>
              )}
            </div>

            {/* Checkbox with Text */}
            <div className="form-group checkbox-group">
         <input
             type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
        />
  <label htmlFor="acceptTerms">I agree to the terms and conditions</label>
</div>

<div className="form-group checkbox-group">
  <input
    type="checkbox"
    id="acceptTerm"
    checked={acceptTerm}
    onChange={() => setAcceptTerm(!acceptTerm)}
  />
  <label htmlFor="acceptTerm">I agree to the terms an</label>
</div>


            {/* Submit Button */}
            <button type="submit" className="submit-button">
              SIGN IN
            </button>
          </form>
        </div>
        {/* Right Side */}
        <div className="right-side">
          <h2 className="register-title">HAVE AN ACCOUNT?</h2>
          <a href="/register" className="register-button">
            LOG IN
          </a>
          <div className="footer">
            <p>РУССКИЙ | ҚАЗАҚ | ENGLISH</p>
            <a href="/cookies-settings">COOKIES SETTINGS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;