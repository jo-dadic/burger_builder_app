import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

// import React from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";

// import classes from "./Burger.css";

// import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

// const Burger = (props) => {
//   console.log(props);
//   // transforming an object of key-value pairs into the array of ingredients where the value of the object is important for to know many ingredients we need and the key is important for which type of the ingredients we need
//   // keys() - extract keys from object and gives an array
//   let TransformedIngredients = Object.keys(props.ingredients)
//     .map((igKey) => {
//       return [...Array(props.ingredients[igKey])].map((_, i) => {
//         return <BurgerIngredient key={igKey + i} type={igKey} />;
//       });
//     })
//     .reduce((arr, el) => {
//       return arr.concat(el);
//     }, []);

//   console.log(TransformedIngredients);

//   if (TransformedIngredients.length === 0) {
//     TransformedIngredients = <p>Please, start adding ingredients!</p>;
//   }

//   return (
//     <div className={classes.Burger}>
//       <BurgerIngredient type="bread-top" />
//       {TransformedIngredients}
//       <BurgerIngredient type="bread-bottom" />
//     </div>
//   );
// };

// export default withRouter(Burger);

// Burger.propTypes = {
//   ingredients: PropTypes.object,
// };
