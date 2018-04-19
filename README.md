# React-Recipe

A project modeling container versus presentational
components.

## Component Hierarchy

Assuming there are two ingredients, and the first is
being edited while the second is not:

```
+---------------------------------------------+
| EditableRecipeContainer                     |
|  +---------------------------------------+  |
|  | EditableRecipe                        |  |
|  |                                       |  |
|  |  +---------------------------------+  |  |
|  |  | EditableIngredientContainer     |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  |  | IngredientForm            |  |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  +---------------------------------|  |  |
|  |                                       |  |
|  |  +---------------------------------+  |  |
|  |  | EditableIngredientContainer     |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  |  | Ingredient                   |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  +---------------------------------|  |  |
|  |                                       |  |
|  |  +---------------------------------+  |  |
|  |  | NewIngredientForm               |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  |  | IngredientForm            |  |  |  |
|  |  |  +---------------------------+  |  |  |
|  |  +---------------------------------+  |  |
|  |                                       |  |
|  +---------------------------------------+  |
+---------------------------------------------+
```