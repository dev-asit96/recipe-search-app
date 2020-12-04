import React from 'react';
import Style from './Recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={Style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <h4>Calories: {Math.floor(calories)}</h4>
      <img className={Style.image} src={image} alt='' />
    </div>
  );
};

export default Recipe;
