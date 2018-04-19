import React from 'react';

import serial from './serial';

import EditableRecipe from './EditableRecipe';
import NewIngredientForm from './NewIngredientForm';

export default class EditableRecipeContainer extends React.Component {
  state = {
    ingredients: [
      { id: serial(), qty: "1 cup", component: "kale" },
      { id: serial(), qty: "2 tsp", component: "salt" },
    ]
  };

  addIngredient = (ingredient) => {
    this.setState(state => ({
      ingredients: [...state.ingredients, ingredient],
    }));
  }

  editIngredient = ({ id, ...ingredient }) => {
    this.setState(state => ({
      ingredients: state.ingredients.map(i => (
        i.id === id
          ? { ...ingredient, id: id }
          : i
      ))
    }))
  }

  deleteIngredient = (id) => {
    this.setState(state => ({
      ingredients: state.ingredients.filter(i => i.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <EditableRecipe
          ingredients={this.state.ingredients}
          handleEdit={this.editIngredient}
          handleDelete={this.deleteIngredient}
        />
        <NewIngredientForm
          handleAdd={this.addIngredient}
        />
      </div>
    )
  }
}