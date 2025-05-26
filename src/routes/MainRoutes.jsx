import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateRecipes from '../pages/CreateRecipes'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import DetailedRecipe from '../pages/DetailedRecipe'

const MainRoutes = () => {
  
  
    return (
    <div>
      
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/about' element = {<About />} />
            <Route path = '/recipes' element = {<Recipes />} />
            <Route path='/recipes/detailedRecipes/:id' element = {<DetailedRecipe />} />
            <Route path =  '/createRecipes' element = {<CreateRecipes />} />
        </Routes>

    </div>
  )
}

export default MainRoutes
