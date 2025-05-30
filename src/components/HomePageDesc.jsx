import React, { useContext, useEffect, useState } from 'react'
import pencil from "../stickers/pencil.png"
import { RecipeDataContext } from '../Context/RecipeContext'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
const HomePageDesc = () => {
  let [allRecipe] = useContext(RecipeDataContext)
  let [recipeCard, setrecipeCard] = useState([])
  const navigate = useNavigate()
  let cardSetting = ()=>{
     let randomInde2 =  Math.floor(Math.random() * allRecipe.length);
     let card =  <RecipeCard 
        key={allRecipe[randomInde2].id}
        url={allRecipe[randomInde2].url}
        title={allRecipe[randomInde2].title}
        description={allRecipe[randomInde2].description}
        chef={allRecipe[randomInde2].chef}
        id={allRecipe[randomInde2].id} />
        setrecipeCard(prev=>[...prev,card])
  }

   useEffect(()=>{
    for(let i=0; i<3; i++) cardSetting()
   },[allRecipe])
   
console.log(recipeCard);

  

  return (
   
    <div className="Home2Card">
    
      <div className="Home2Nav">
        <h4>Our Favourite Recipes</h4>
        <h4
        onClick={()=>{navigate("/createRecipes")}}><span><img src={pencil} alt="" /></span> Share Your Recipe</h4>
      </div>

      <div className="Home2CardParent">
       {recipeCard}
      </div>

    </div>
    
  )
}

export default HomePageDesc
