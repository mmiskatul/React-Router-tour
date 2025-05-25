import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const {id,userId,title,body}=post;
    return (
        <div>
            <div className='mx-20 my-10 '>
                <h5 >Id :{id}</h5>
                <p >UserId : <span className='text-base'>{userId}</span></p>
                <h1>Title : <span className='text-2xl'>{title}</span></h1>
                <p className=''>Description : {body}</p>
            </div>
        </div>
    );
};

export default PostDetails;