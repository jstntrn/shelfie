import React, { Component } from 'react';
import defaultImage from './../../graphics/no-image.JPG';
import './Form.css';

export default class Form extends Component{

    constructor(){
        super()
        this.state = {
            image_url: '',
            product_name: '',
            price: 0
        }
        
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
                    <button className='form-button' onClick={() => this.handleClear()}>Cancel</button>
                    <button className='form-button'>Add to Inventory</button>
                </div>
            </div>
        )
    }
}