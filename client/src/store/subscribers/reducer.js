import { addSubscriber,setSubscribers } from "./actions";

const initialValue = {
    value:JSON.parse(localStorage.getItem('users')),
    isLoading:true
 
}
const subscriberReducer =(state =initialValue,action) =>{

    switch (action.type){
case setSubscribers:{

    return {value:JSON.parse(localStorage.getItem('users')),isLoading:false}
}

       
        case addSubscriber: {
                let users = state.value
                let index;

             if(action.payload.index === 0){
index = 1
             }else{
                 index = 0
             }
             let subscribers = users[action.payload.index].subscribers
 

             subscribers.push(users[index])
             users[action.payload.index].subscribers = subscribers

             localStorage.setItem('users',JSON.stringify(users))
            

             fetch('http://localhost:3001/users', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({subscriber:users[index] , userIndex:action.payload.index})
})


console.log(users)

            return {value:JSON.parse(localStorage.getItem('users')),isLoading:false}
            }
        default:{
            return state
        }
        
    }


}
export default subscriberReducer