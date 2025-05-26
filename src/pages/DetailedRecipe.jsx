import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RecipeDataContext } from '../Context/RecipeContext'

const DetailedRecipe = () => {
    let navigate = useNavigate()
    const {id} = useParams()
    let [data,setData] = useContext(RecipeDataContext)
    let [userData,setuserData] = useState(null)

        
   
    


  return (
    <div>
        <button onClick={()=>{navigate(-1)}}>Go Back</button>
     <button >Get me Data</button>
     <h1 style={{color:"red",fontSize:"200px"}}>hf</h1>
    </div>
  )
}

export default DetailedRecipe
