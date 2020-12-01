import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
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
    <form>
      <label>Username:
        <input 
          type='text'
          name='username'
          value={formData.username}
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
      <Link to='/register'>Register</Link>
      <button>Login</button>
    </form>
  )
}