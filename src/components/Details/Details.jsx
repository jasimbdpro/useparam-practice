import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fake-data/dummy-data.json'


const Details = () => {
    const { productId } = useParams()
    const product = fakeData.find(i => i._id === productId)
    const { picture, name, gender, details } = product;
    console.log(product)


    return (
        <div>
            <img width="100" src={picture} alt="" />
            <div>
                <h1>Hello {productId}</h1>
                <h3>{name}</h3>
                <h3>{gender}</h3>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Details;