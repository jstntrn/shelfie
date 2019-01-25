import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      productList: [
        {
          product_id: 1,
          name: 'The Jack Boot in Nightfall',
          price: 250.00,
          image_url: 'https://cdn.shopify.com/s/files/1/0468/9441/products/TaftOnWhite_20180627_0010_540x.jpg?v=1543862481'
        },
        {
          product_id: 2,
          name: 'The Dragon Boot in Midnight',
          price: 349.00,
          image_url: 'https://cdn.shopify.com/s/files/1/0468/9441/products/Taft_OnWhite_20180604-014-min_grande_445f0ece-a6e0-4b7a-af28-0222dffc7fa0_540x.jpg?v=1543863178'
        },
        {
          product_id: 3,
          name: 'The Dragon Boot in Midnight',
          price: 349.00,
          image_url: 'https://cdn.shopify.com/s/files/1/0468/9441/products/Taft_OnWhite_20180604-014-min_grande_445f0ece-a6e0-4b7a-af28-0222dffc7fa0_540x.jpg?v=1543863178'
        },
        {
          product_id: 4,
          name: 'The Dragon Boot in Midnight',
          price: 349.00,
          image_url: 'https://cdn.shopify.com/s/files/1/0468/9441/products/Taft_OnWhite_20180604-014-min_grande_445f0ece-a6e0-4b7a-af28-0222dffc7fa0_540x.jpg?v=1543863178'
        },
      ]
    }
  }

  // componentDidMount(){
  //   axios.get('/api/products')
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body-display">
          <Form />
          <Dashboard products={this.state.productList}/>
        </div>
      </div>
    );
  }
}

export default App;
