import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './userHeader.module.scss'
import { NavLink } from "react-router-dom";
import { addSubscriberAC } from "../../store/subscribers/actionCreators";
import { setUsers } from "../../store/users/actions";

const UserHeader = (props) => {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users.value)
    const posts = useSelector(store => store.products.value)


    const index = users.findIndex(el => el.id === props.id)

    const user = users[index]

    return (

        <>

            <header className={styles.user_header}>
                <NavLink className={styles.logo_insta} to='/' ><h2 className={styles.logo_insta}>Instagram</h2 ></NavLink>
                <img className={styles.user_img} src={user.url} alt='Avatar' />
                <div className={styles.content_container}>
                    <h2 className={styles.user_nickname}>{user.nickName}</h2>

                    <h3 className={styles.user_posts}>{posts[index].posts.length}<span className={styles.user_span}>posts</span></h3>
                    <h3 className={styles.user_subscribers}>{user.subscribers.length}<span className={styles.user_span}>followers</span></h3>

                    <h2 className={styles.user_name}>{user.name}</h2>

                    <h3>{user.info}</h3>
                </div>
                <button className={styles.subscribe_btn} onClick={() => {
                    dispatch(addSubscriberAC({ index: index, subscriber: user }))
                    dispatch({ type: setUsers })
                }}>Subscribe</button>
            </header>

        </>

    )


}
export default UserHeader
