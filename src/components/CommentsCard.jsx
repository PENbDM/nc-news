import React from 'react'

function CommentsCard({comment}) {
    const formattedDate = new Date(comment.created_at).toLocaleString();
      return (
    <div className='border border-solid border-green-500  m-4 w-50'>
        <div className='flex flex-col items-center'>
        <p className='text-center'>Comment: {comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Posted: {formattedDate}</p>
        </div>
    </div>
  )
}

export default CommentsCard