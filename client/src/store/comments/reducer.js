import { addComments,setComments } from "./actions";

const initialValue = {
    value:JSON.parse(localStorage.getItem('counter')),
  
}


const commentsReducer = (state = initialValue,action) =>{

switch (action.type){
    case setComments: {


        return { value:JSON.parse(localStorage.getItem('counter'))}
    }

case addComments: {
  
    let postArr = state.value
let userPosts = postArr[action.payload.userIndex]
let posts =userPosts.posts
let post = posts[action.payload.index]
let comments = post.comments

comments.push(action.payload.comment)

localStorage.setItem('counter',JSON.stringify(postArr))}

return {value:JSON.parse(localStorage.getItem('counter')),}

default:{
    return state
}


}


}

export default commentsReducer