const users = [
    {"id":1,
   "subscribers":[],
   "nickName":"ilya25",
   "url":"https://sunmag.me/wp-content/uploads/2020/08/sunmag-2-kachestva-nastoyashchego-muzhchiny.jpg",
   "name":"ivan kyrpa",
   "info":"succesfull investor and interpeneur",

},
{"id":2,
    "name":"ilya stezenko",
    "nickName":"vania123",
    "url":"https://st.depositphotos.com/1986419/2346/i/600/depositphotos_23465244-stock-photo-waist-up-portrait-of-a.jpg",
    "subscribers":[],
    "info":"cardiologist in Medea",
 
 }
]

export  const getUsersData = () => users


export const addNewSubscriberData = (subscriber,userIndex) =>{
    users[userIndex].subscribers.push(subscriber)

    return users

}