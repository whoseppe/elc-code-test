/* 
Purpose: Product components containing relevant data 

Notes: 
Ideally these cards are clickable and would take you to a more in-depth product page where the users can add to cart.
*/

import React from "react";

const Product = ({ about, name, picture, price }) => {
  return (
    <div className="product-wrapper">
      <img className="product-image" src={picture} />
      <div>
        <p className="product-name">{name}</p>
        <p className="product-about">{about}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default Product;
