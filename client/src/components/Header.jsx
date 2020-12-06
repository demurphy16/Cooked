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
            <p className="current-user header-link">{currentUser.username}</p>
            <Link className="my-recipes-link header-link" to='/recipes/myRecipes'>My Recipes</Link>
            <Link to="/recipes"><h1 className="title header-link">Cooked</h1></Link>
            <Link className="create-recipe-link header-link" to='/recipes/new'>Create a Recipe</Link>
            <button className="header-link" onClick={handleLogout}>Logout</button>
          </div>
          :
          <>
          </>
      }
    </div>
  )
}