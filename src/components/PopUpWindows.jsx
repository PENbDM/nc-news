import React from 'react'
import Confirm from '../assets/confirm.png'

function PopUpWindows() {
  return (
    <div className='flex w-30'>
        <div className='flex flex-row items-center p-2 border border-solid border-green-500'>
            <img className='mr-5' src={Confirm} width={40} height={40} />
            <p>Your comment has been deleted</p>
        </div>
    </div>
  )
}

export default PopUpWindows