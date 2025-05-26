import React, { useContext } from 'react'
import '../index.css'
import { RecipeDataContext } from './../Context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  
let [recipeArray,setrecipeArray] = useContext(RecipeDataContext)
let navigate = useNavigate()


let deleteHandler= (deleteId)=>{
 recipeArray =  recipeArray.filter((value)=>{
  if(value.id!=deleteId) return value
 })
 setrecipeArray([...recipeArray])
 console.log(deleteId);
 
}

let cardElements = recipeArray.length>0 ? recipeArray.map((card)=>{
    return(
      <>
        <div className="recipeCard">
         <svg 
      onClick={()=>deleteHandler(card.id)}
      className='close-icon'
     width="64px" height="64px" viewBox="-2.88 -2.88 29.76 29.76" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#000000"></path> </g></svg>
      <div className="detail">
            <h1>{card.title}</h1>
            <h4>{card.chef}</h4>
      </div>
        <img src={card.url} alt=""  className='cardImg' 
                onClick={()=>{navigate(`/recipes/detailedrecipes/${card.id}`)}} />
      </div>
      </>
    )
}) : ""

  

return (
    <div className='cardParent'>
      
      <div className="recipeCard">
      <div className="detail">
            <h1>Burger</h1>
            <h4>Abhishek</h4>
      </div>
        <img src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt=""  className='cardImg' />
      </div>

      {cardElements}

        
  
    </div>
  )
}

export default Recipes
