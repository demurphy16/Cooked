import { useState } from 'react'


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
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleRegister(formData)
    }}>
      <h3>Register</h3>
      <label>Username:
        <input 
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>Email:
        <input 
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}