import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6> {name} </h6>
                <p>${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} </p>
            </div>
            <button className='cartBtn'>Add to cart</button>

        </div>
    );
};

export default Product;