import React from 'react';
import style from './recipe.module.css';

//Recipe object for render; styalized with html
const Recipe = ({title, calories, image, ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Recipe</p>
            <ol>
                {ingredients.map((ingredient,i )=>(
                    <li className="ingredient-item" key = {i}>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories: </b> {calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );

}

export default Recipe;