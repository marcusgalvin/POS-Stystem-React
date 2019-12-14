import React from 'react';

const Product = ({ id, name, desc, img, price, addFunc }) => {

  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{desc}</h2>

        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue bn"
          onClick={() => addFunc({ id, name, desc, img, price, units: 1 })}
        >Add</button>
        <span>$ {price} </span>
      </div>
    </article>

  );
};

export default Product