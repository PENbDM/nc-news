import { useState,useEffect } from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Auth from './pages/Auth'
import ApiDescription from './pages/ApiDescription'
import Articles from './pages/Articles'
import Topics from './pages/Topics'
import ArticlePage from './pages/ArticlePage'
import Comments from './pages/Comments'
import PageNotFound from './components/PageNotFound'
import { UserContext } from './UserContext'
import ArticleNotFound from './components/ArticleNotFound'
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
        {user && (
          <>
          <Route path='/articles/:id' element={<ArticlePage />} /> 
          <Route path='/api' element={<ApiDescription/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/topics' element={<Topics/>} />
          <Route path='/comments' element={<Comments/>} />
          </>
        )}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/article-not-found" element={<ArticleNotFound />} />

      </Routes>
   </UserContext.Provider>
  )
}

export default App
