import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateRecipes from '../pages/CreateRecipes'
import Recipes from '../pages/Recipes'
import DetailedRecipe from '../pages/DetailedRecipe'
import UpdateRecipe from '../pages/UpdateRecipe'
import Favourites from '../pages/Favourites'

const MainRoutes = () => {
  
  
    return (
    <div>
      
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/favourites' element = {<Favourites />} />
            <Route path = '/recipes' element = {<Recipes />} />
            <Route path='/recipes/detailedRecipes/:id' element = {<DetailedRecipe />} />
            <Route path='/recipes/updateRecipe/:id' element = {<UpdateRecipe />} />
            <Route path =  '/createRecipes' element = {<CreateRecipes />} />
        </Routes>

    </div>
  )
}

export default MainRoutes
