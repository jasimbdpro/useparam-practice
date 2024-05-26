import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link className='nav2' to="/">Home</Link>
            <Link className='nav2' to="/about">About</Link>
        </nav>
    );
};

export default Navbar;