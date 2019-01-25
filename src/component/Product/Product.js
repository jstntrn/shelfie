import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product(props){

    let {id, deleteFn} = props;

    return(
        <div className="product-container">
            <div className='img-container'>
                <img className='card-image' src={props.image_url} alt='product' />
            </div>
            <div className='info'>
                <h4>{props.name}</h4>
                <h4>${props.price}</h4>
                <div className='card-buttons'>
                    <button className='card-button' onClick={() => deleteFn(id)}>Delete</button>
                    <Link to={`/product/edit/${id}`}><button className='card-button'>Edit</button></Link>
                </div>
            </div>

        </div>
    )
}