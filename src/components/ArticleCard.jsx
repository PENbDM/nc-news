import React from 'react'
import { Link } from 'react-router-dom';

function ArticleCard({article}) {
  console.log(article);
    const formattedDate = new Date(article.created_at).toLocaleString();

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4'>
        <div className='flex flex-col items-center border border-solid border-green-500 p-4 h-100'>
        <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img  className="max-w-full h-auto object-contain" src={article.article_img_url} alt='Article' />
        <p className='text-center mt-2 mb-2'>Title: <span className='font-semibold'>{article.title}</span></p>
        <p>Topic: <span className='font-semibold'>{article.topic}</span></p>
        <p>Author: <span className='font-semibold'>{article.author}</span></p>
        <p>Posted: <span className='font-semibold'>{formattedDate}</span></p>
        <p>Comments: <span className='font-semibold'>{article.comment_count}</span></p>
        <p>Votes: <span className='font-semibold'>{article.votes}</span></p>
        </Link>
    </div>
    </div>
  )
}

export default ArticleCard