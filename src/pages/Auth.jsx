import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Header from '../components/Header'
import UserCards from '../components/UserCards'
import { useContext } from 'react';
import { UserContext } from '../UserContext'
function Auth() {
    const userConsume = useContext(UserContext)
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [users,setUsers] = useState([])
    useEffect(()=>{
    axios.get("https://pen-nc-news.onrender.com/api/users").then((res)=>{
        setUsers(res.data)
    })
    },[])
    const handleCardClick = (userData) => {
        setSelectedUserData(userData);
      };
      if(selectedUserData!==null){
        axios.get(`https://pen-nc-news.onrender.com/api/users/${selectedUserData.username}`).then((res)=>{
            localStorage.setItem('userData', JSON.stringify(res.data));
            userConsume.setIsAuth(true)
        })
      }
  return (
    <div>
        <Header/>
        <p className='flex mt-5 justify-center font-semibold text-[20px]'>Please choose the user you want to be.</p>
        <div style={{maxWidth:'1600px'}} className='flex justify-center pt-10 gap-10 flex-wrap flex-row mx-auto'>
        {users.map((user) => (
        <UserCards key={user.username} user={user} onClick={handleCardClick} />
      ))}
      </div>
    </div>
  )
}

export default Auth