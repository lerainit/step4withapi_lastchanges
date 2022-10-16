import { addSubscriber, setSubscribers } from "./actions";




export const setSubscribersAC =() =>  async (dispatch) =>{
    if(!localStorage.getItem('users')){
        try {
            const {status,data} = await fetch('http://localhost:3001/users').then(response =>response.json());
        
    if(status === 'success'){
        
         localStorage.setItem('users',JSON.stringify(data))
               
   
                dispatch({ type:setSubscribers})
            
    }
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setSubscribers})
        }}

export const addSubscriberAC = (payload) =>({type:addSubscriber,payload})