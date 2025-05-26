import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateRecipes from './../pages/CreateRecipes';

const NavBar = () => {
  
    return (
    <div className='navBar'>
      

      <NavLink  to = {'/'} 
      className={`navTitle`}
      style={(e)=> {return{color:e.isActive ? "#c6da56" : ""}}}>Home</NavLink>

      <NavLink to ='/recipes' 
      className= {"navTitle"} 
      style={(e)=> {return{color:e.isActive ? "#c6da56" : ""}}}>Recipes</NavLink>

      <NavLink to ='/about'  
      className="navTitle" 
      style={(e)=> {return{color:e.isActive ? "#c6da56" : ""}}}>About</NavLink>

      <NavLink to = '/createRecipes' 
      className="navTitle createRecipeButton" 
      style={(e)=> {return{color:e.isActive ? "#1a522f" : ""}}}>Create Recipe</NavLink>
    </div>
  )
}

export default NavBar
