import { useState } from 'react'

import './Login.css'


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <div className="register-container">
    <form className="register-form landing-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleRegister(formData)
    }}>
      <h3>Register</h3>
      {/* <label className="register-label landing-label">Username: */}
        <input className="landing-input"
          type='text'
          name='username'
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
        />
      {/* </label> */}
      {/* <label className="register-label landing-label">Email: */}
        <input className="landing-input"
          type='text'
          name='email'
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
      {/* </label> */}
      {/* <label className="register-label landing-label">Password: */}
        <input className="landing-input"
          type='password'
          name='password'
          value={formData.password}
          placeholder="Password (minimum 6)"
          onChange={handleChange}
        />
      {/* </label> */}
      <button className="register-button landing-button" type="submit">Register</button>
      </form>
      </div>
  )
}