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
            <Link to="/home"><h1 className="title">Cooked</h1></Link>
            <Link classname="create-recipe-link" to='/createRecipe'>Create a Recipe</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
          :
          <>
          </>
      }
    </div>
  )
}