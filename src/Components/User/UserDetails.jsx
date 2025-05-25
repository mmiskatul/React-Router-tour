import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user=useLoaderData();
    const  {name,email,username,phone,website,address,company}=user;
    const navigate=useNavigate();
    const handdleGoback =()=>{
        navigate(-1)
    }
    
    return (
        <div className='flex flex-col px-12 py-8 items-center bg-gray-200 space-y-3'>
      <div className='px-15 py-8 bg-white/40 rounded-2xl   '>
        <h2 className='text-3xl font-bold'>{name} ({ username})</h2>
      <p  className='text-xl'><strong>Email :</strong> { email}</p>
      <p className='text-base'><strong>Phone:</strong> { phone}</p>
      <p><strong>Website:</strong> <a href={`http://${ website}`} target="_blank" rel="noreferrer">{ website}</a></p>

      <h3>Address</h3>
      <p>{ address.suite}, { address.street}</p>
      <p>{ address.city}, { address.zipcode}</p>
      <p><strong>Geo:</strong> Lat: { address.geo.lat}, Lng: { address.geo.lng}</p>

      <h3>Company</h3>
      <p><strong>Name:</strong> { company.name}</p>
      <p><strong>CatchPhrase:</strong> { company.catchPhrase}</p>
      <p><strong>BS:</strong> { company.bs}</p>
      <button className='text-2xl w-full bg-blue-600  rounded-sm px-3 py-2 text-white font-bold  mt-5 active:scale-95 hover:cursor-pointer' onClick={handdleGoback}>Go Back</button>
      </div>
    </div>
    );
};

export default UserDetails;