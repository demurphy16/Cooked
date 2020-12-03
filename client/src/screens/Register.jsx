import { useState } from 'react'

import './Register.css'


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
      <h3>Register</h3>
    <form className="register-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleRegister(formData)
    }}>
      <h3>Register</h3>
      <label className="register-label">Username:
        <input 
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label className="register-label">Email:
        <input 
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="register-label">Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button className="register-button" type="submit">Register</button>
      </form>
      </div>
  )
}