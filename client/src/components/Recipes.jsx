import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Recipes.css'


export default function Recipes(props) {
  
  return (
    <div className="recipe-ultra-container">
    <div className="recipe-page-container">
      {props.recipes && props.recipes.map(recipe =>
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <div className="recipe-container">
            <h4 className="recipe-name recipe">{recipe.name}</h4>
            <h5 className="recipe-name recipe">Cook Time: {recipe.time}</h5>
              <img className="recipe-image" src={recipe.img} />
          </div>
        </Link>
      )}
        </div>
      </div>
  )
}