import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateRecipes from './../pages/CreateRecipes';

const NavBar = () => {
  
    return (
    <div className='navBar'>
      

      <NavLink  to = {'/'} 
      className={`navTitle`}
      style={(e)=> {return{color:e.isActive ? "#f7cc0b" : ""}}}>Home</NavLink>

      <NavLink to ='/recipes' 
      className= {"navTitle"} 
      style={(e)=> {return{color:e.isActive ? "#f7cc0b" : ""}}}>Recipes</NavLink>

      <NavLink to ='/favourites'  
      className="navTitle" 
      style={(e)=> {return{color:e.isActive ? "#f7cc0b" : ""}}}>Favourites</NavLink>

      <NavLink to = '/createRecipes' 
      className="navTitle createRecipeButton" 
      style={(e)=> {return{color:e.isActive ? "#fc5f26" : ""}}}>Create Recipe</NavLink>
    </div>
  )
}

export default NavBar
