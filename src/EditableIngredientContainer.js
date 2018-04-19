import React from 'react';

import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';


export default class EditableIngredientContainer extends React.Component {
  state = {
    qty: this.props.qty,
    component: this.props.component,
    isEditing: false,
  };

  handleChange = ({ target }) => {
    this.setState(state => ({
      [target.name]: target.value,
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isEditing: false });
    this.props.handleEdit({
      id: this.props.id,
      qty: this.state.qty,
      component: this.state.component,
    });
  }

  okToSubmit = () => {
    return Boolean(this.state.qty && this.state.component);
  }

  startEditing = e => {
    this.setState({ isEditing: true });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <IngredientForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          qty={this.state.qty}
          component={this.state.component}
          okToSubmit={this.okToSubmit}
          actionLabel="Edit"
        />
      );
    } else {
      return (
        <li>
          <Ingredient
            qty={this.state.qty}
            component={this.state.component}
          />
          <button onClick={this.startEditing}>Edit</button>
          <button onClick={() => this.props.handleDelete(this.props.id)} >
            Del
            </button>
        </li>
      )
    }
  }
}
