import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6> {name} </h6>
                <p>${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} </p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cartBtn'>Add to cart</button>

        </div>
    );
};

export default Product;