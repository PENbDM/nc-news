import React from 'react'
import Header from '../components/Header'
import { useState,useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import axios from 'axios'
function Articles() {
  const [articles,setArticles] = useState([])
  useEffect(()=>{
    axios.get("https://pen-nc-news.onrender.com/api/articles").then((res)=>{
      setArticles(res.data)
    })
  },[])
  return (
    <div>    
      <Header/>
      <div className='mx-auto mt-10 ml-20 mr-20' style={{ maxWidth: '1600px' }}>
      <p className='font-semibold mb-10 ml-3'>All articles</p>
          <div className='flex flex-row flex-wrap'>
          {articles.map((article) => (
          <ArticleCard key={article.title} article={article}  />
          ))}
          </div>
      </div>
    </div>
  )
}

export default Articles