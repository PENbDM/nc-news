import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'
import CreateComment from '../components/CreateComment';
import CommentsCard from '../components/CommentsCard';
import CommentsCardUser from '../components/CommentsCardUser';
import PopUpWindows from '../components/PopUpWindows';
import { useContext } from 'react';
import { UserContext } from '../UserContext'
function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments,setShowComments] = useState(false)
  const [createComment,setCreateComment] = useState(false)
  const [showConfirmation,setShowConfirmation] = useState(false)
  const [showConfirmationDelete,setConfirmationDelete] = useState(false)
  const userConsume = useContext(UserContext)
  const user = userConsume.user;
  const commentsByCurrentUser = comments.filter((comment)=> comment.author === user.username)
  const commentsByDifferentUser = comments.filter((comment)=> comment.author !== user.username)
  useEffect(() => {
    axios.get(`https://pen-nc-news.onrender.com/api/articles/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  if (!article) {
    return <div>Loading....</div>;
  }
  const formattedDate = new Date(article.created_at).toLocaleString();

  const handleComments = () => {
    axios.get(`https://pen-nc-news.onrender.com/api/articles/${article.article_id}/comments`)
      .then((res) => {
        setComments(res.data);
        setShowComments(true)
        setShowConfirmation(false)
        setCreateComment(false)
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };
  const hideComments = () => {
    setConfirmationDelete(false)
    setShowComments(false)
  }
  const handleVote = (voteValue) => {
    const voteData = {
      inc_votes: voteValue,
    };
  
    axios.patch(`https://pen-nc-news.onrender.com/api/articles/${article.article_id}`, voteData)
      .then(() => {
        return axios.get(`https://pen-nc-news.onrender.com/api/articles/${id}`);
      })
      .then((res) => {
        setArticle(res.data);
      })
      .catch((error) => {
        console.error('Error updating votes:', error);
      });
  };

  const handleVoteFor = () => {
    handleVote(1);
    setCreateComment(false)
    setShowConfirmation(false)
    hideComments()
  };
  
  const handleVoteDown = () => {
    handleVote(-1);
    setCreateComment(false)
    setShowConfirmation(false)
    hideComments()
  };
  const handleCreateComment = () =>{
    setCreateComment(true)
    hideComments()
    setShowConfirmation(false)
  }
  const handleDeleteComment = (id)=>{
    axios.delete(`https://pen-nc-news.onrender.com/api/comments/${id}`).then((res)=>{
      if(res.status===204){
        setConfirmationDelete(true)
        handleComments()
      }
    })
  }


  return (
    <>
    <Header/>
    <div className='flex justify-center items-center mt-12 flex-col '>
        <div className='flex flex-col items-center border border-solid border-green-500 p-4 w-50'>
          <img className="max-w-full h-auto object-contain" src={article.article_img_url} alt='Article' />
          <p className='text-center mt-2 mb-2'>Title: <span className='font-semibold'>{article.title}</span></p>
          <p>Topic: <span className='font-semibold'>{article.topic}</span></p>
          <p>Author: <span className='font-semibold'>{article.author}</span></p>
          <p>Posted: <span className='font-semibold'>{formattedDate}</span></p>
          <p>Comments: <span className='font-semibold'>{article.comment_count}</span></p>
          <p>Votes: <span className='font-semibold'>{article.votes}</span></p>
        </div>
        <div className='mt-10 mb-10 w-50 flex justify-between'>
          {showComments===true ? <button className='p-2 border border-solid border-red-500' onClick={hideComments}>Hide Comments</button> : <button className='p-2 border border-solid border-green-500' onClick={handleComments}>Get Comments</button>}
          <button onClick={handleCreateComment} className='p-2 border border-solid border-green-500'>Create Comment</button>
          <button onClick={handleVoteFor} className='p-2 border border-solid border-green-500'>Vote</button>
          <button onClick={handleVoteDown} className='p-2 border border-solid border-green-500'>Vote down</button>
        </div>
      </div>

      <div style={{ maxWidth: '1600px' }} className='mx-auto flex justify-center'>
      {showConfirmation===true ? <p className='font-medium'>Congratulations, you added a comment.</p> : null}
      </div>
      {createComment &&(
    <div style={{ maxWidth: '1600px' }} className='mx-auto flex flex-col'>
      <CreateComment user={user} article_id={article.article_id} setCreateComment={setCreateComment} setShowConfirmation={setShowConfirmation}/>
    </div>
    )}
 {showComments && (
  <div style={{ maxWidth: '1600px' }} className='mx-auto flex flex-col justify-center'>
    {commentsByCurrentUser.length === 0 ? <p className='flex justify-center font-semibold mb-4'>You dont have your own comments, press create comment</p>
      : (
        <>
          <p className='flex justify-center font-semibold'>Your Comments</p>
          {showConfirmationDelete===true ? <div className='mt-2 flex justify-center'><PopUpWindows/></div> : null }
          <div style={{ maxWidth: '1600px' }} className='mx-auto flex flex-row flex-wrap justify-center'>
            {commentsByCurrentUser.map((commentByCurrentUser) => (
              <CommentsCardUser key={commentByCurrentUser.comment_id}  commentByCurrentUser={commentByCurrentUser} handleDeleteComment={handleDeleteComment} />
            ))}
          </div>
        </>
      )}
      {
        commentsByDifferentUser.length===0 ? <p className='flex justify-center font-semibold'>No comments from others users</p>
        : (
          <>
          <p className='flex justify-center font-semibold'>Comments By Others Users</p>
          <div style={{ maxWidth: '1600px' }} className='mx-auto flex flex-row flex-wrap justify-center'>
          {commentsByDifferentUser.map((comment) => (
              <CommentsCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
          </>
        )
      }
  </div>
)}
  </>
  );
}

export default ArticlePage;
