import { useState } from 'react'

import './Login.css'

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
    <div className="login-container">
      <h3>Login or Click Register to Sign Up</h3>
    <form className="login-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleLogin(formData)
    }}>
      <label className="login-label username-label">Username:
        <input className="login-input username-input"
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label className="login-label password-label">Password:
        <input className="login-input password-input"
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button className="login-button" type="submit">Login</button>
      </form>
      </div>
  )
}