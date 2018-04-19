import React from 'react';
import './IngredientForm.css';

const IngredientForm = (props) => (
  <div className="IngredientForm">
    <form onSubmit={props.handleSubmit}>
      <input
        name="qty"
        value={props.qty}
        onChange={props.handleChange}
        placeholder="Ingredient"
      />
      <input
        name="component"
        value={props.component}
        onChange={props.handleChange}
        placeholder="Component"
      />
      <button disabled={!props.okToSubmit()} type="submit">{props.actionLabel}</button>
    </form>
  </div>
);

export default IngredientForm;