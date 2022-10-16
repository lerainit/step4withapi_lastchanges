import { getPostsData,addNewPostData,addLikesData,deletePostData,addCommentsData} from "./postsDataLayers.js";



export const getPosts = (req,res) =>{
    const data = getPostsData()
    res.json({status:'success',data})
}
export const addNewPost =(req,res) =>{
    const data = addNewPostData(req.body.post,req.body.userIndex)
res.json({status:'success',data})

}
export const addLikes = (req,res) =>{

    const data = addLikesData(req.body.post,req.body.userIndex,req.params.index)
    res.json({status:'success',data})
}
export const addComments = (req,res) =>{

const data = addCommentsData(req.body.comment,req.body.userIndex,req.params.index)
console.log(req.params.index)
res.json({status:'success',data})

}

export const deletePost =(req,res) =>{

    deletePostData(req.body.userIndex,req.params.index)

    res.json({status:'success'})
}