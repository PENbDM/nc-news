import React from 'react'

export default function TopicsCard({topic,handleArticleByTopic}) {
  return (
    <div className='flex p-4 m-2 border border-solid border-green-500 flex-col items-center'>
        <p>Slug: <span className='font-semibold'>{topic.slug}</span></p>
        <p>Description: <span className='font-semibold'>{topic.description}</span></p>
        <button className='mt-4 p-2 border border-solid border-green-500' onClick={()=>handleArticleByTopic(topic.slug)}>Get Articles by Topic</button>
    </div>
  )
}
