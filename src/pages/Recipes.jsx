import React, { useContext, useEffect, useState } from 'react'
import '../index.css'
import { RecipeDataContext } from './../Context/RecipeContext';
import {Link} from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  
  let [recipeArray] = useContext(RecipeDataContext)
  let [AllCards, setAllCards] = useState()

//  AllCards =  recipeArray.map((recipe)=><RecipeCard url = {recipe.url} title = {recipe.title} description = {recipe.description} chef = {recipe.chef} id = {recipe.id}  />)

//   setAllCards([...AllCards])

  useEffect(() => {
    const cards = recipeArray.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        url={recipe.url}
        title={recipe.title}
        description={recipe.description}
        chef={recipe.chef}
        id={recipe.id}
      />
    ))
    setAllCards(cards)
  }, [recipeArray])

  

return (
   <>
      <div className='AllRecipeMenu'>
      
      <h1 className='RecipePlaceTitle'>All Our Recipes at a Place</h1>
      
      <div className="RecipeCardsParent">
        {AllCards}
      </div>

      </div>

   

   </>
  )
}

export default Recipes
