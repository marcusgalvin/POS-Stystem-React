import React from 'react';

const Product = ({ id, name, desc, img, price, addFunc }) => {

  return (
    <article className="product" id={id}>
      <div>
        <h1>{name}</h1>
        {/* <h2 >{desc}</h2> */}

        <button
          onClick={() => addFunc({ id, name, desc, img, price, units: 1 })}
        >Add</button>
        <span>$ {price} </span>
      </div>
    </article>

  );
};

export default Product