import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {

  const {currentUser} = props
  return (
    <div>
      <h1>Cooked</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {/* {
        currentUser && 
        <>
        <Link></Link>  
        </>
      } */}
    </div>
  )
}