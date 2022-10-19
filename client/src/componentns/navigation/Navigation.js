import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useSelector } from 'react-redux'
import BackButton from '../backbutton/backbutton'


const Navigation = () => {

const users= useSelector(store => store.users.value)
    

  
  
    const user1 = users[0]
    const user2 = users[1]

    return (
        <header className={styles.header}>
            <NavLink className={styles.logo} to='/' ><h2 >Instagram</h2 ></NavLink><BackButton/>
            <div className={styles.container}><NavLink className={styles.cart_link} to="/user1"><img className={styles.cart} src={user2.url} alt="img" /><h2 className={styles.user_name}>{user2.name}</h2></NavLink>
                <NavLink className={styles.fav_link} to="/user2"><img className={styles.favorite_img} src={user1.url} alt="img" /> <h2 className={styles.user_name}>{user1.name}</h2></NavLink>


            </div></header>)
}
export default Navigation