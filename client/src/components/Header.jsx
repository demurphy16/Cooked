import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {

  const { currentUser, handleLogout } = props
  return (
    <div>
      <h1>Cooked</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to='/myRecipes'>My Recipes</Link>
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