import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header(props) {

  const { currentUser, handleLogout } = props
  return (
    <div>
      {
        currentUser ?
          <div className="header-container">
            <p className="current-user">{currentUser.username}</p>
            <Link className="my-recipes-link" to='/myRecipes'>My Recipes</Link>
            <h1 className="title">Cooked</h1>
            <Link classname="create-recipe-link" to='/createRecipe'>Create a Recipe</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
          :
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
      }
    </div>
  )
}