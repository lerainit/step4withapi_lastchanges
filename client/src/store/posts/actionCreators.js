import { setPosts } from "./actions";

 export const setPostsAC =()=> async (dispatch)=>{
    if(!localStorage.getItem('posts')){
        try {
            const {status,data} = await fetch('http://localhost:3001/newPosts').then(response =>response.json());
         

            if(status === 'success'){
                localStorage.setItem('posts',JSON.stringify(data))
               
               
                dispatch({ type:setPosts})
            
            }
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setPosts})
        }


}