import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    return (
        <div className='bg-gray-100 rounded-2xl hover:scale-110 hover:bg-gray-400 hover:text-gray-900 flex flex-col items-center justify-center space-y-4 px-8 py-5  '>
            <h4>Id :{id}</h4>
            <h1 className='text-xl'>title : {title}</h1>
            <Link className='bg-gray-600 text-white hover:bg-amber-50 hover:text-black active:scale-95 px-4 py-2 rounded-xl' to={`/posts/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;