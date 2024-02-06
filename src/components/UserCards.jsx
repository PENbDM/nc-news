import React from 'react'

function UserCards({user,onClick}) {
    const handleCardClick = () => {
        onClick(user); 
    };
  return (
  <div
      className='border border-solid border-green-500 p-4 hover:border-blue-500 hover:shadow-md hover:transform scale-105 cursor-pointer'
      onClick={handleCardClick}
    >
        <div className='flex flex-col items-center'>
            <p>User name: <span className='font-semibold'>{user.username}</span> </p>
            <p>Name: <span className='font-semibold'>{user.name}</span></p>
            <img className='mt-10' src={user.avatar_url} width={100} height={100}/>
        </div>
    </div>
  )
}

export default UserCards