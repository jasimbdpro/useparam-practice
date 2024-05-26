import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product)
    return (
        <div>
            <h3><Link to={"/product/" + props.product._id}>{props.product.name}</Link></h3>
        </div>
    );
};

export default Product;