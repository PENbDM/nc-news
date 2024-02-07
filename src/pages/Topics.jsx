import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useState,useEffect } from 'react'
import TopicsCard from '../components/TopicsCard'
import ArticleCard from '../components/ArticleCard'
function Topics() {
  const [topics,setTopics] = useState([])
  const [articleByTopic,setArticleByTopic] = useState([])
  const [showArticle,setShowArticle] = useState(false)
  console.log(showArticle);
  useEffect(()=>{
    axios.get("https://pen-nc-news.onrender.com/api/topics").then((res)=>{
      setTopics(res.data)
    })
  },[])
  const handleArticleByTopic = (slug)=>{
    axios.get(`https://pen-nc-news.onrender.com/api/articles?topic=${slug}`).then((res)=>{
      setArticleByTopic(res.data);
    })
  }
  console.log(articleByTopic);
  return (
    <div>      
      <Header/>
      <div style={{ maxWidth: '1600px' }} className='mx-auto flex justify-center  '>
      <div className='flex justify-center flex-col'>
        <p className='flex justify-center mt-5 mb-5 text-3xl'>Click on any Topic</p>
      <div style={{ width: '1600px' }} className='flex flex-wrap justify-between mt-4 '> 
        {topics.map((topic) => (
          <TopicsCard key={topic.slug} topic={topic} handleArticleByTopic={handleArticleByTopic}  />
          ))}
          </div>
         <div className='flex flex-wrap'>
          {
            articleByTopic.length !== 0 ?  articleByTopic.map((article) => (
              <ArticleCard key={article.title} article={article}  />
              )) : null
          }
         </div>
          </div>
      </div>
    
  </div>
  )
}

export default Topics