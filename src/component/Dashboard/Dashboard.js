import React, { Component } from 'react';
import Product from './../Product/Product';
import './Dashboard.css';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super();
    
        this.state = {
          productList: []
        }
      }
      
      componentDidMount(){
        axios.get('/api/inventory')
        .then((res) => {
          this.setState({
            productList: res.data
          })
        })
      }

    render(){
        let {deleteFn} = this.props

        return(
            <div>
                {
                    this.state.productList.map(product => (
                        <Product 
                        key={product.product_id}
                        id={product.product_id}
                        image_url={product.image_url}
                        name={product.name}
                        price={product.price}
                        deleteFn={deleteFn}
                        />
                    ))
                }
            </div>
        )
    }
}