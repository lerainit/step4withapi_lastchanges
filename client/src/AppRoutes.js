import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UserPage from './pages/userpage/userPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import PostsPage from './componentns/posts/postsPage';


const AppRoutes = () => {
const id1 =1
const id2 = 2
const index1 =0
const index2 =1

    return (
     
        <Routes>
            <Route path='/' element={<PostsPage />   } />
           <Route path='/user2' element={<UserPage index={index1} id ={id1}/>} />
           <Route path='/posts' element={<UserPage  />} />
           <Route path='/user1' element={<UserPage index={index2} id ={id2}/>}/>
           <Route path='*' element={<NotFoundPage />} />
         </Routes>

        
    )
}
export default AppRoutes;
