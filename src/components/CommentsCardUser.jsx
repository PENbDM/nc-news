import React from 'react'
import Logo from '../assets/deleteComment.png'
import { useState } from 'react';
function CommentsCardUser({commentByCurrentUser,handleDeleteComment}) {
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);
  const formattedDate = new Date(commentByCurrentUser.created_at).toLocaleString();
  const handleDeleteClick = () => {
    if (!isDeleteDisabled) {
      setIsDeleteDisabled(true);

      handleDeleteComment(commentByCurrentUser.comment_id);

      setTimeout(() => {
        setIsDeleteDisabled(false);
      }, 3000); 
    }
  };
      return (
    <div className='border border-solid border-green-500  m-4 w-50'>
      <img className={`mt-2 ml-2 mb-1 cursor-pointer ${isDeleteDisabled ? 'disabled' : ''}`} onClick={handleDeleteClick} src={Logo} width={20} height={20} />
        <div className='flex flex-col items-center'>
        <p className='text-center'>Comment: {commentByCurrentUser.body}</p>
        <p>Author: {commentByCurrentUser.author}</p>
        <p>Posted: {formattedDate}</p>
        </div>
    </div>
  )
}

export default CommentsCardUser