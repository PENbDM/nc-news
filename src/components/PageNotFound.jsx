import React from 'react';
import PageNo from '../assets/404.png';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='bg-gray-600 min-h-screen flex flex-col'>
      <div className='flex flex-col  mt-40 items-center text-white'>
        <p className='text-3xl font-bold mb-4'>Page not found</p>
        <img src={PageNo} alt="404 Image" width={300} height={300} />
        <Link to='/'>
        <button className='p-2 border border-solid border-green-500' >Come back to Home Page</button>
        </Link>
      </div>
    </div>  
  );
}

export default PageNotFound;
