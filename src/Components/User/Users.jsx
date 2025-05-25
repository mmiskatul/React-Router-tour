import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    const users =useLoaderData(); 
    return (
        <div>
            <div className='grid md:grid-cols-3 px-12 py-10  gap-8'>
                {
                    users.map(user=><User  key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default Users;