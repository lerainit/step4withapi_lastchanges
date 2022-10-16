import { setUsers } from "./actions";



 export const setUsersAC = () =>  async (dispatch) =>{
    if(!localStorage.getItem('users')){
        try {
            const {status,data} = await fetch('http://localhost:3001/users').then(response =>response.json());
     
    
        if(status === 'success'){
         localStorage.setItem('users',JSON.stringify(data))
               
   
                dispatch({ type:setUsers})
            
         }
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setUsers})
        }


 }