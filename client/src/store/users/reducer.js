import { setUsers } from "./actions";
const initialValue = {
value:JSON.parse(localStorage.getItem('users')),
isLoading:true
}

const UsersReducer = (state = initialValue,action) =>{
switch (action.type){


case setUsers: {
return {value:JSON.parse(localStorage.getItem('users')),isLoading:false}
}
default:{
    return state
}


}

}
export default UsersReducer;