import React, { useContext } from 'react'
import '../index.css'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid/non-secure'
import { RecipeDataContext } from '../Context/RecipeContext'
import image1 from '../assets/delicious-food-menu-icons_24877-51636-removebg-preview.png'
import image3 from '../assets/240_F_1481432135_zUt4ysxIWW3zZZCTN5HpR5ePzrsNfUXJ-removebg-preview.png'
import image4 from '../assets/meal-fast-food_1308-13808-removebg-preview.png'
import image5 from '../assets/sliced-vegetables-realistic-concept-with-tomato-pepper-onion-vector-illustration_1284-16245-removebg-preview.png'

const CreateRecipes = () => {
  let  [recipeArray, setrecipeArray] = useContext(RecipeDataContext)
 
  const{register,
    handleSubmit,reset} = useForm()
  
    let submitHandler = (data)=>{
      data.id = nanoid()
      setrecipeArray([...recipeArray,data])  //setting the elements in the array
      reset()
    }
    

  return (
    <div className='form-Parent'>
      
      <div className="leftimgForm">
      <h1>“Share your food story with us”</h1>
        <h2>"Have a Signature Dish? Let the World Taste It by Submitting Your Recipe Today!"</h2>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} 
      className='createRecipeForm'>
      

          <input 
        {...register("url")}
        placeholder='Enter image url'
        type="url" />

        <input 
        {...register("title")}
        placeholder='Enter Recipe Name'
        type="text" />

          <input 
        {...register("chef")}
        placeholder='Enter Chef Name'
        type="text" />

        <textarea 
        {...register("description")}
        placeholder='Recipe Desciption'
        rows={10}
          />

        <textarea 
        {...register("ingridients")}
        placeholder='Write Ingridients seperated by commas'
         rows={10}
        />

          <textarea 
        {...register("instructions")}
        placeholder='Write Instructions seperated by commas'
          rows={10}
        />
        
        <select {...register("category")}>
          <option value="indian">Indian</option>
          <option value="chineese">Chineese</option>
          <option value="thai">Thai</option>
        </select>
      
      <button>Submit</button>
<img src={image1} className='gifs image1' alt="" />
<img src={image4} className='gifs image4' alt="" />
<img src={image3} className='gifs image3' alt=""  />
<img src={image5} alt=""  className='gifs image5'/>

      </form>


    </div>
  )
}

export default CreateRecipes
