import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Левый блок */}
        <div className="left-side">
          <h1 className="login-title">LOG IN TO YOUR ACCOUNT</h1>
          <form className="login-form">
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="E-MAIL"
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => !email && setEmailFocus(false)} // Remove focus if the field is empty
                required
              />
              {/* Show alert only if the field is focused and password is empty */}
              {emailFocus && !email && !password && (
                <span className="alert">Enter your e-mail address</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="PASSWORD"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => !password && setPasswordFocus(false)} // Remove focus if the field is empty
                required
              />
              {/* Show alert only if the field is focused and email is empty */}
              {passwordFocus && !password && !email && (
                <span className="alert">Enter your password</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              LOG IN
            </button>
          </form>

          <a href="/forgot-password" className="link">
            Have you forgotten your password?
          </a>
        </div>

        {/* Правый блок */}
        <div className="right-side">
          <h2 className="register-title">NEED AN ACCOUNT?</h2>
          <a href="/register" className="register-button">
            REGISTER
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