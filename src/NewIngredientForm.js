import React from 'react';
import serial from './serial';

import IngredientForm from './IngredientForm';

export default class NewIngredientForm extends React.Component {
  state = { qty: "", component: "" };

  handleChange = ({ target }) => {
    this.setState(state => ({
      [target.name]: target.value,
    }));
  }

  okToSubmit = () => {
    return Boolean(this.state.qty && this.state.component);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd({ ...this.state, id: serial() });
    this.setState({ qty: "", component: "" });
  }

  render() {
    return (
      <IngredientForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        qty={this.state.qty}
        component={this.state.component}
        okToSubmit={this.okToSubmit}
        actionLabel="Add"
      />
    );
  }
}
