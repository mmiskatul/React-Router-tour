import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const navigate=useNavigate();
    const handleShowDetails=()=>{
            navigate(`/users/${id}`);
    }
    return (
        <div className='bg-gray-100 rounded-2xl   hover:bg-gray-400 hover:text-white flex flex-col items-center justify-center space-y-4 px-8 py-5  ' >
            <h2 >Name : {name}</h2>
            <h3>Email : {email} </h3>
            <p>Phone : {phone}</p>
            {/* <Link className='bg-gray-600 text-white hover:bg-amber-50 hover:text-black active:scale-95 px-4 py-2 rounded-xl' to={`/users/${id}`}>Show details</Link> */}
            <button className='bg-gray-600 text-white hover:bg-amber-50 hover:text-black active:scale-95 px-4 py-2 rounded-xl' onClick={handleShowDetails}>Show details</button>
        </div>
    );
};

export default User;