import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { RecipeDataContext } from '../Context/RecipeContext'
import { toast } from 'react-toastify'


const UpdateRecipe = () => {

 let {id} = useParams()
  let navigate = useNavigate()
 let [AllRecipe,setAllRecipe] = useContext(RecipeDataContext)
 let selectedRecipe = AllRecipe.find((val)=>val.id==id)

     
 let {register,reset,handleSubmit} = useForm({
    defaultValues:{
        url:selectedRecipe.url,
        title:selectedRecipe.title,
        chef:selectedRecipe.chef,
        description:selectedRecipe.description,
        ingridients:selectedRecipe.ingridients,
        instructions:selectedRecipe.instructions,
        category:selectedRecipe.category
    }
 })


     let submitHandler = (data)=>{
        let index =  AllRecipe.findIndex((val)=>val.id==id)
        //! to preserve the id we are copying the new data and old data in selected recipe 
        selectedRecipe = {...selectedRecipe,...data,}
        //! now replacing that object in the full context array at their orignal index
        AllRecipe[index] = selectedRecipe
        //! now setting the array using the useState hool 
        setAllRecipe(AllRecipe)
        navigate(`/recipes/detailedRecipes/${id}`) 
        toast.success("Updated Bhai")
        console.log(selectedRecipe);

        }
console.log(AllRecipe);


    return (<>
 
     <h1 onClick={()=>navigate(`/recipes/detailedRecipes/${id                                                                                                                                                                                   }`)} 
     className="backUpdate">Go Back</h1>

    <div className='updateRecipe'>
     
     <h1 className='updateHead' >Update Form</h1>

    <form onSubmit={handleSubmit(submitHandler)} 
      className='updateForm'>
      
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
        rows={6}
          />

        <textarea 
     
        {...register("ingridients")}
        placeholder='Write Ingridients seperated by commas'
         rows={8}
        />

          <textarea 
        {...register("instructions")}
        placeholder='Write Instructions seperated by fullstops "."'
          rows={8}
        />
        
        <select {...register("category")}>
          <option value="indian">Indian</option>
          <option value="chineese">Chineese</option>
          <option value="thai">Thai</option>
        </select>
      
      <button>Update Recipe</button>
      </form>

    </div>
    
      
    </>
  
  )
}

export default UpdateRecipe
