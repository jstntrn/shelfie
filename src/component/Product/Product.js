import React from 'react';
import './Product.css'

export default function Product(props){
    return(
        <div className="product-container">
            <div className='img-container'>
                <img className='card-image' src={props.image_url} alt='product' />
            </div>
            <h4>{props.name}</h4>
            <h4>${props.price}</h4>
        </div>
    )
}