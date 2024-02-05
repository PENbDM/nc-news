import React from 'react'
import Header from '../components/Header'
import { useContext } from 'react';
import { UserContext } from '../UserContext'
function User() {
  const userConsume = useContext(UserContext)
  const user = userConsume.user;

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    userConsume.setIsAuth(false)
  }

  return (
    <div>
        <Header/>
        <div style={{maxWidth:'1600px'}} className='flex flex-row'>
        <div className='ml-[100px] mt-10 border border-solid border-green-500 p-4 hover:border-blue-500 hover:shadow-md cursor-pointer flex flex-col items-center max-w-[300px]'>
        <p>User name: {user.username}</p>
        <p>Name: {user.name}</p>
        <img src={user.avatar_url} width={100} height={100}/>
        </div>
        <div className='flex ml-auto mt-10'><button onClick={()=>handleLogOut()} className='border border-solid border-green-500' style={{height:'50px', width:'80px'}}>Log Out</button></div>
        </div>
     </div>
  )
}

export default User