import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const posts=useLoaderData();
    return (
        <div>
            <h1 className='mb-10'>Post :{posts.length}</h1>
           <div className='grid md:grid-cols-3  gap-8  mx-10 '>
             {
                posts.map(post=><Post post={post}/>)
            }
           </div>
        </div>
    );
};

export default Posts;