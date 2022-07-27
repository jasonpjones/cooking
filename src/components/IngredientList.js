import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList({ ingrients }) {
  const ingredientElements = ingrients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return (
    <div className='ingredient-grid'>
      {ingredientElements}
    </div>
  )
}
