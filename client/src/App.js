import React, { Component } from 'react';
import { render } from 'react-dom';
import "./style.css"

//imports
import Product from "./components/Product"

const products = [
  {
    id: 1,
    name: "Apple",
    desc: "text",
    price: 100
  },
  {
    id: 2,
    name: "pear",
    desc: "text",
    price: 100
  },
  {
    id: 3,
    name: "orange",
    desc: "text",
    price: 100
  },
  {
    id: 4,
    name: "banana",
    desc: "text",
    price: 100
  },
  {
    id: 5,
    name: "grape",
    desc: "text",
    price: 100
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      cart: [{
        id: 1,
        name: "Apple",
        desc: "text",
        price: 100,
        units: 1
      }
      ]

    }
  }

  handleAddFunc(product) {
    //if the product found is the products, filter retruns an array
    const existingProduct = this.state.cart.filter(p => p.id === product.id);

    //if below is true it means we have on exisitng product, already exisits
    if (existingProduct.length > 0) {

      //we will get all products execpt this
      const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
      const updatedUnitsProduct = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units
      }

      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      })

    } else {

      this.setState({
        cart: [...this.state.cart, product]
      })

    }

  }


  render() {
    return (
      <main className="items" >
        < ul >
          {
            this.state.cart.map(c => <li>{c.name} | units {c.units}</li>)

          }
        </ul >
        {
          products.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
        }

      </main >
    )
  }
}






export default App;
