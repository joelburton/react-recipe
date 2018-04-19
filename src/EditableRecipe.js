import React from 'react';

import EditableIngredientContainer from './EditableIngredientContainer';
import './EditableRecipe.css';

const EditableRecipe = ({ ingredients, ...props }) => {
  return (
    <div className="EditableRecipe">
      {ingredients.map(({ id, qty, component }) => (
        <EditableIngredientContainer
          key={id}
          id={id}
          qty={qty}
          component={component}
          {...props}
        />
      ))}
    </div>
  );
}

export default EditableRecipe;