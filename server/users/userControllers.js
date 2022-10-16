import { getUsersData,addNewSubscriberData } from "./userDataLayers.js";

export const getUsers = (req,res) =>{
    const data = getUsersData()
    res.json({status:'success',data})
}
export const addNewSubscriber =(req,res) =>{
    const data = addNewSubscriberData(req.body.subscriber,req.body.userIndex);
res.json({status:'success',data})

}