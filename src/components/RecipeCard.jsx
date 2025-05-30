import React from 'react'
import { Link} from 'react-router-dom'

const RecipeCard = (props) => {
    let {id,
        title,
        description,
        chef,
        url
    } = props
  return (
    <>
        <Link to={`/recipes/detailedRecipes/${id}`} className='RecipeCard'  key={id}>
           <img src={url} alt="" />
           <h1 className='cardTitle'>{title}</h1>
           <h1 className='cardChefName'>{chef}</h1>
           <small className='cardDesc'>{description.slice(0,100)}......{''} <p className='item'>more</p> </small>
           </Link> 




    </>
  )
}

export default RecipeCard
