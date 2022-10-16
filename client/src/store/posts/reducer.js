import { setPosts } from "./actions";

const initialValue = {
    value:JSON.parse(localStorage.getItem('posts')),
    isLoading:true
}


const postsReducer = (state = initialValue,action) =>{

switch (action.type){


case setPosts: {
return {value:JSON.parse(localStorage.getItem('posts')),isLoading:false}
}
default:{
    return state
}


}


}

export default postsReducer