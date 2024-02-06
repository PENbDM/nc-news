// ArticlePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header'
import CommentsCard from '../components/CommentsCard';
function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  console.log(comments);
  useEffect(() => {
    axios.get(`https://pen-nc-news.onrender.com/api/articles/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  const formattedDate = new Date(article.created_at).toLocaleString();

  const handleComments = () => {
    axios.get(`https://pen-nc-news.onrender.com/api/articles/${article.article_id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

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
        <div className='mt-10 mb-10'>
          <button className='p-2 border border-solid border-green-500' onClick={handleComments}>Get Comments</button>
        </div>
      </div>
      <div style={{maxWidth:'1600px'}} className=' mx-auto flex flex-row flex-wrap justify-center'>
      {comments.map((comment) => (
          <CommentsCard key={comment.comment_id} comment={comment} />
        ))}
        </div>
  </>
  );
}

export default ArticlePage;
