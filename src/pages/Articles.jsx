import React from 'react'
import Header from '../components/Header'
import { useState,useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import axios from 'axios'
function Articles() {
  const [articles,setArticles] = useState([])
  const [sortBy, setSortBy] = useState('date-asc');

  useEffect(()=>{
    axios.get("https://pen-nc-news.onrender.com/api/articles").then((res)=>{
      setArticles(res.data)
    })
  },[])

  const sortedArticles = [...articles].sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return new Date(a.created_at) - new Date(b.created_at);
      case 'date-desc':
        return new Date(b.created_at) - new Date(a.created_at);
      case 'comment-asc':
        return a.comment_count - b.comment_count;
      case 'comment-desc':
        return b.comment_count - a.comment_count;
      case 'votes-asc':
        return a.votes - b.votes;
      case 'votes-desc':
        return b.votes - a.votes;
      default:
        return 0;
    }
  });  return (
    <div>    
      <Header/>
      <div className='mx-auto mt-10 ml-20 mr-20' style={{ maxWidth: '1600px' }}>
        <div className='flex flex-row justify-between'>
      <p className='font-semibold mb-10 ml-3'>All articles</p>
      <div class="flex items-center space-x-4">
      <label for="sortSelect" class="text-sm">Sort by:</label>
  <select id="sortSelect"
  className="p-2 border rounded" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>    
  <option value="date-asc">Date (Ascending)</option>
    <option value="date-desc">Date (Descending)</option>
    <option value="comment-asc">Comment Count (Ascending)</option>
    <option value="comment-desc">Comment Count (Descending)</option>
    <option value="votes-asc">Votes (Ascending)</option>
    <option value="votes-desc">Votes (Descending)</option>
  </select>
</div>
      </div>
          <div className='flex flex-row flex-wrap'>
          {sortedArticles.map((article) => (
          <ArticleCard key={article.title} article={article}  />
          ))}
          </div>
      </div>
    </div>
  )
}

export default Articles