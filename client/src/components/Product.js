import React from 'react';

const Product = ({ id, name, desc, img, price, addFunc }) => {

  //indiv product
  return (
    <article className="product" id={id}>
      <div>
        <h1>{name}</h1>
        {/* <h2 >{desc}</h2> */}
        {/* add to cart button */}
        <button
          onClick={() => addFunc({ id, name, desc, img, price, units: 1 })}
        >Add</button>
        <span>$ {price} </span>
      </div>
    </article>

  );
};

export default Product