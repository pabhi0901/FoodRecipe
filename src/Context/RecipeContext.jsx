import React, { createContext, useState } from 'react'
export const RecipeDataContext = createContext(null)

const RecipeContext = (props) => {
  
const [recipeArray, setrecipeArray] = useState([])
console.log(recipeArray);

    return (
    <RecipeDataContext.Provider value = {[recipeArray, setrecipeArray]}>
      {props.children}
    </RecipeDataContext.Provider>
  )
}

export default RecipeContext
