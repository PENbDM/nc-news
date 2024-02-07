import React from 'react'
import Header from '../components/Header'
import { useContext } from 'react';
import { UserContext } from '../UserContext'
function Home() {
  const userConsume = useContext(UserContext)
  const user = userConsume.user;
  return (
    <div>
      <Header/>
      <div style={{ maxWidth: '1600px' }} className='mx-auto mt-10 ml-20 mr-20'>
        {user===null ?    <div className='flex mx-auto flex-col items-center justify-center '>
        <p className='text-3xl'>Hi, this is the best news site, better than BBC</p>
        <p className='text-xl'>In order to get acces to functionality of this web site you</p>
        <p className='text-xl'>Have to be <span className='font-medium'>login</span></p>
        </div> :    
        <div className='flex mx-auto flex-col items-center justify-center '>
        <p className='text-3xl'>Hi, this is the best news site, better than BBC</p>
        <p className='text-xl'>You are login, so you got acces to functionality of this web site</p>
        <p className='text-xl'>Choose something from <span className='font-medium'>top</span></p>
        </div> }
   
      </div>
      </div>
  )
}

export default Home