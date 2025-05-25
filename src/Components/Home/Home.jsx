import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const naviation=useNavigate();
    return (
        <div className='flex flex-col '>
           <Header/>
           {
            naviation.state === "loading" ?<p>
                loading......
            </p>:<Outlet/>
           }
           
           <Footer/>
        </div>
    );
};

export default Home;