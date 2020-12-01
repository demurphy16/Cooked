import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>Welcome to Cooked</h1>
      <Link to='/login'>Login/Register</Link>
    </div>
  )
}