import React, { useContext, useEffect, useState } from 'react'

import {  useNavigate, useParams } from 'react-router-dom'
import { RecipeDataContext } from '../Context/RecipeContext'
import tagImage from '../stickers/svg.png'
import ingridients from '../stickers/Ingridients.png'
import instructionsImage from '../stickers/instruction.png'
import { Toastify } from 'toastify'
import { toast } from 'react-toastify'
const DetailedRecipe = () => {
  let {id} = useParams()
  let navigate = useNavigate()
  let [ingridientList, setingridientList] = useState()
  let [instructionListArray, setinstructionListArray] = useState()
  let [ingridientListArray, setingridientListArray] = useState()
  let [AllRecipe,setAllRecipe] = useContext(RecipeDataContext)
  let selectedRecipe = AllRecipe.find((data)=>id==data.id)
    

    useEffect(()=>{
  ingridientList =  selectedRecipe.ingridients.split(",")
  setingridientList([...ingridientList])
  ingridientListArray = ingridientList.map((val ,i)=><p className='item' key = {i}>{val}</p>)
  setingridientListArray([...ingridientListArray])
 
  instructionListArray = selectedRecipe.instructions.split(".")
  setinstructionListArray([...instructionListArray])
  instructionListArray = instructionListArray.map((val,i)=><p className='item' key = {i}>{val}</p>)
  setinstructionListArray([...instructionListArray])
  console.log(instructionListArray);
  
    },[])

    let deleteHandler = (id)=>{
       let index =  AllRecipe.findIndex((val)=>val.id==id)
        AllRecipe.splice(index,1)
        setAllRecipe([...AllRecipe])
        navigate('/recipes')
        toast.error("Recipe Deleted")
    }

  return (
    <>
    <h1 onClick={()=>navigate("/recipes")} 
     className="back">Go Back</h1>
    <div className='DetailedRecipe' id='tyu'>
      
      <div className="RecipeImage"
      // style={{background:URL(`${selectedRecipe.url}`)}}
      >
        <img src={selectedRecipe.url}  alt="" />
      </div>

      <div className="RecipeDetails">
          
          <div className="recipeNav">
            <div className='category'>
             <img src={tagImage} alt="" />
             <p>{selectedRecipe.category}</p>
             </div>

            <p>{selectedRecipe.chef}</p>
          </div>

          
          <h1 className='recipeTitle' >{selectedRecipe.title}</h1>
          <p className='recipeDesc'>{selectedRecipe.description}</p>

          <div className="recipeDetailed">
            
            <div className="ingridients">
              <div className='ingridientsTitle'>
             <img src={ingridients} alt="" />
             <p>Ingredients</p>
             </div>
            {ingridientListArray}  
            </div>

            <div className='instructionsDetailed'>
              <div className='instructionTitle'>
             <img src={instructionsImage} alt="" />
             <p>Instructions</p>
             </div>
              {instructionListArray}

            </div>


          </div>

      </div>

    </div>
   <div className='updateDelete'>
    <button className='update' onClick={()=>{navigate(`/recipes/updateRecipe/${selectedRecipe.id}`)}}>Update</button>
    <button onClick={()=>{deleteHandler(selectedRecipe.id)}} 
    className='delete'>Delete</button>
    </div> 
    </>
  )
}

export default DetailedRecipe
