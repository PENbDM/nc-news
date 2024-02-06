import React from 'react'
import Header from '../components/Header'
function Home() {
  return (
    <div>
      <Header/>
      <div style={{ maxWidth: '1600px' }} className='mx-auto mt-10 ml-20 mr-20'>
      <div className='flex mx-auto flex-col items-center justify-center '>
        <p className='text-3xl'>Hi, this is the best news site, better than BBC</p>
        <p className='text-xl'>In order to get acces to functionality of this web site you</p>
        <p className='text-xl'>Have to be <span className='font-medium'>login</span></p>
        </div>
      </div>
      </div>
  )
}

export default Home