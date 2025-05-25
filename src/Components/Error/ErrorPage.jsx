import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError(); 
    return (
        <div className='flex flex-col align-middle items-center justify-between '>
            <h1 className='text-7xl mt-20'>Oopss ! </h1>
            <p className='text-4xl mt-19'>{error.statusText ||error.massage}</p>
            {
                error.status===404 &&<div>
                    <h3 className='mb-5'>Page Not Found Error</h3>
                    <Link to={'/'}><button className='text-2xl bg-gray-800 text-white px-5 py-2 rounded-2xl cursor-pointer'>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;