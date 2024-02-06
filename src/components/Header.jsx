import React from 'react'
import Logo from '../assets/news_logo.png'
import UserLogo from '../assets/user_logo.png'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext'
function Header() {
  const userConsume = useContext(UserContext)
  const user = userConsume.user;
  return (
    <div className='bg-gray-600'>
    <div style={{maxWidth:'1600px'}}  className="flex mx-auto">
        <Link  to="/" className='flex flex-row items-center pl-10 w-1/4'>
          <img src={Logo} width={50} height={50}/>
          <p className='text-white'>NC NEWS</p>
        </Link>
        <div className='flex flex-grow flex-row items-center gap-4 pr-10'>
          {
            user ? 
            <>
          <Link to='/api' className='flex-grow'>API DESCRIPTION</Link>
          <Link to='/topics' className='flex-grow'>TOPICS</Link>
          <Link to='/articles' className='flex-grow'>ARTICLES</Link>
          <Link to='/comments' className='flex-grow'>COMMENTS</Link>
            </> : null
          }
        </div>
        <Link to="/auth" className='flex w-1/4 pr-10'>
          <div className='flex flex-row items-center ml-auto'>
            {
              user ? <img src={user.avatar_url} width={40} height={40} alt="User Logo" /> : 
              <img src={UserLogo} width={40} height={40} alt="User Logo" />
            }
            <p className='pl-4 text-lg'>User</p>
          </div>
        </Link>
    </div>
    </div>
  )
}

export default Header