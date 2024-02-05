import React from 'react'
import Logo from '../assets/news_logo.png'
import UserLogo from '../assets/user_logo.png'
import {Link} from 'react-router-dom'

function Header() {
  


  return (
    <div className='bg-gray-600'>
    <div style={{maxWidth:'1600px'}}  className="flex mx-auto">
        <Link  to="/" className='flex flex-row items-center pl-10 w-1/4'>
          <img src={Logo} width={50} height={50}/>
          <p className='text-white'>NC NEWS</p>
        </Link>
        <div className='flex flex-grow flex-row items-center gap-4 pr-10'>
          <button className='flex-grow'>API DESCRIPTION</button>
          <button className='flex-grow'>TOPICS</button>
          <button className='flex-grow'>ARTICLES</button>
          <button className='flex-grow'>COMMENTS</button>
        </div>
        <Link to="/auth" className='flex w-1/4 pr-10'>
          <div className='flex flex-row items-center ml-auto'>
            <img src={UserLogo} width={40} height={40} alt="User Logo" />
            <p>User</p>
          </div>
        </Link>
    </div>
    </div>
  )
}

export default Header