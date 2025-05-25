import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between px-12 py-5 bg-gray-100'>
            <h1 className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl'>My Website</h1>
            <nav className='flex  gap-8 '>
                < NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="">Home </ NavLink>
                < NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="/about">About </ NavLink>
             <NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="/users">Users</ NavLink>
                < NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="/contact">Contact Us</ NavLink>
                < NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="/posts">Post</ NavLink>

            </nav>
            < NavLink className='hover:bg-gray-300 hover:cursor-pointer px-6 py-3 rounded-xl' to="/service">Service </ NavLink>

        </div>
    );
};

export default Header;