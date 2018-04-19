import React from 'react';
import './Ingredient.css';

const Ingredient = ({ qty, component }) => {
  return (
    <span className="Ingredient">{qty} {component}</span>
  );
}

export default Ingredient;