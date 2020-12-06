import { useState } from 'react'

import './Login.css'
import Register from './Register'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    <div className="full-login">
      <h1 className="login-title">Welcome To Cooked</h1>
      <p className="login-description">Cooked is an application that is desinged to help amatuer chefs organize and create</p>
      <h3 className="login-directions">Login or Register to Sign Up</h3>
    <div className="login-page-container">
    <div className="login-container">
    <form className="login-form landing-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleLogin(formData)
          }}>
          <h3>Login</h3>
      {/* <label className="login-label username-label">Username: */}
        <input className="landing-input"
          type='text'
          name='username'
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      {/* </label> */}
      {/* <label className="login-label password-label">Password: */}
        <input className="landing-input"
          type='password'
          name='password'
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      {/* </label> */}
      <button className="login-button landing-button" type="submit">Login</button>
        </form>
        </div>
      <Register
        handleRegister={props.handleRegister}
      />
      </div>
      </div>
  )
}