import React, { Component } from 'react';
import defaultImage from './../../graphics/no-image.JPG';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Form extends Component{
    
    constructor(){
        super()
        this.state = {
            image_url: '',
            product_name: '',
            price: 0
        }
        this.addProduct = this.addProduct.bind(this)
    }
    
    addProduct(){
        axios.post('/api/product',
        {
            name: this.state.product_name,
            price: this.state.price,
            image_url: this.state.image_url
        })
        .then((res) => {
          console.log('added')
        })
      }

    handleImageUpdate(val){
        this.setState({
            image_url: val
        })
    }

    handleNameUpdate(val){
        this.setState({
            product_name: val
        })
    }

    handlePriceUpdate(val){
        this.setState({
            price: val
        })
    }

    handleClear(){
        this.setState({
            image_url: '',
            product_name: '',
            price: 0
        })
    }


    render(){
        return(
            <div className='form'>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
                <div className='image-container'>
                    <img className='product-image' onError={(e) => {e.target.onerror=null; e.target.src=defaultImage}} src={this.state.image_url} alt='product'/>
                </div>
                <h2>Image URL:</h2>
                <input onChange={(e) => this.handleImageUpdate(e.target.value)} value={this.state.image_url}/>
                <h2>Product Name:</h2>
                <input onChange={(e) => this.handleNameUpdate(e.target.value)} value={this.state.product_name}/>
                <h2>Price:</h2>
                <input onChange={(e) => this.handlePriceUpdate(e.target.value)} value={this.state.price}/>
                <div className='form-buttons'>
                    <Link to='/'><button className='form-button' onClick={() => this.handleClear()}>Cancel</button></Link>
                    <Link to='/'><button className='form-button'onClick={() => this.addProduct()}>Add to Inventory</button></Link>
                </div>
            </div>
        )
    }
}