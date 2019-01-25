import React, { Component } from 'react';
import Product from './../Product/Product';
import './Dashboard.css';

export default class Dashboard extends Component{
    render(){
        return(
            <div>
                <div className='product-list'>
                    {
                        this.props.products.map(product => (
                            <Product 
                            key={product.product_id}
                            image_url={product.image_url}
                            name={product.name}
                            price={product.price}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}