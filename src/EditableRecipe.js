import React from 'react';

import EditableIngredientContainer from './EditableIngredientContainer';
import './EditableRecipe.css';

const EditableRecipe = ({ ingredients, handleEdit, handleDelete }) => {
  return (
    <div className="EditableRecipe">
      {ingredients.map(({ id, qty, component }) => (
        <EditableIngredientContainer
          key={id}
          id={id}
          qty={qty}
          component={component}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default EditableRecipe;