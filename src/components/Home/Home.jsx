import React from 'react';
import fakeData from '../../fake-data/dummy-data.json'
import Product from '../Product/Product';


const Home = (props) => {
    return (
        <div>
            <h1>This is home page of react projet</h1>
            {
                fakeData.map(i => <Product product={i} key={i._id} />)
            }
        </div>
    );
};

export default Home;