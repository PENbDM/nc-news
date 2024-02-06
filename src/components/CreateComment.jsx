import React, { useState } from 'react';
import axios from 'axios';
function CreateComment({user,article_id,setCreateComment,setShowConfirmation}) {
    const [commentText, setCommentText] = useState('');
    const [validationError,setValidationError] = useState('')
    const handleCreateComment = async () => {
        try {
          if (commentText.length < 7) {
            setValidationError('Comment must be at least 7 characters');
          } else {
            const newComment = {
              username: user.username,
              body: commentText,
            };
    
            await axios.post(`https://pen-nc-news.onrender.com/api/articles/${article_id}/comments`, newComment);
    
            setValidationError('');
            setCommentText('');
            setCreateComment(false);
            setShowConfirmation(true)
        }
        } catch (error) {
          console.error('Error creating comment:', error);
        }
      };

 const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
    setValidationError('');
  };
  return (
    <div className='flex flex-col items-center justify-center'>
       <textarea
        className='p-2 border border-solid border-green-500'
        rows="4"
        cols="50"
        placeholder='Write your comment...'
        value={commentText}
        onChange={handleCommentTextChange}
      ></textarea>
      {validationError.length===0 ? null : <p className='mt-2 font-semibold'>{validationError}</p>}
        <button className='p-2 border border-solid border-green-500 mt-4 mb-10' onClick={handleCreateComment}>Submit</button>
    </div>
  )
}

export default CreateComment