import { useState,useEffect } from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Auth from './pages/Auth'
import { createContext } from 'react'
import { UserContext } from './UserContext'
function App() {
  const user = JSON.parse(localStorage.getItem('userData'));
  const [isAuth,setIsAuth] = useState(false)
  
  useEffect(()=>{
    if(user!==null){
      setIsAuth(true)
    }
  })
  return (
  <UserContext.Provider value={{user,setIsAuth}}>
   <Routes>
    <Route path='/' element={<Home/>}/> 
    {user ? (
          <Route path="/auth" element={<Navigate to="/user" />} />
        ) : (
          <Route path="/auth" element={<Auth/>} />
      )}
       {user ? (
          <Route path="/user" element={<User />} />
        ) : (
          <Route path="/user" element={<Navigate to="/auth" />} />
        )}
   </Routes>
   </UserContext.Provider>
  )
}

export default App
