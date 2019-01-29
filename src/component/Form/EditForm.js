import React, { Component } from 'react';
import defaultImage from './../../graphics/no-image.JPG';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
export default class Form extends Component{

    constructor(){
        super()
        this.state = {
            id: 0,
            image_url: '',
            product_name: '',
            price: 0
        }
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount(){
        axios.get(`/api/inventory/${this.props.match.params.id}`)
        .then( (res) => {
            console.log(res.data[0])
          this.setState({
            id: res.data[0].product_id,
            image_url: res.data[0].image_url,
            product_name: res.data[0].name,
            price: res.data[0].price
          })
          console.log(typeof this.state.price)
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
        console.log(this.state)
        this.setState({
            image_url: '',
            product_name: '',
            price: 0
        })
    }

    editProduct(){
        axios.put(`/api/product/${this.state.id}`,
        {
            name: this.state.product_name,
            price: this.state.price,
            image_url: this.state.image_url
        })
        .then( (res) => {
          console.log(this.state)
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
                    <Link to='/'><button className='form-button'onClick={() => this.editProduct()}>Save Changes</button></Link>
                </div>
            </div>
        )
    }
}