import React, { Component } from 'react';
import defaultImage from './../../graphics/no-image.JPG';
import './Form.css';
import axios from 'axios';

export default class Form extends Component{

    constructor(){
        super()
        this.state = {
            id: null,
            image_url: '',
            product_name: '',
            price: 0
        }
        
    }

    componentDidMount(){
        axios.get(`/api/product/${this.props.match.params.id}`)
        .then( (res) => {
          this.setState({
            id: res.data.product_id,
            image_url: res.data.image_url,
            product_name: res.data.name,
            price: res.data.price
          })
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

    handleEdit(){
        const {edit} = this.props;
        const {id, product_name, price, image_url} = this.state;
        edit(id,{
            name: product_name,
            price: price,
            image_url: image_url
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
                    <button className='form-button'onClick={() => this.handleEdit(this.state.id)}>Save Changers</button>
                </div>
            </div>
        )
    }
}