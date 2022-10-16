import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './postsPage.module.scss'
import Navigation from '../navigation/Navigation'
import { incrementLikesAC } from "../../store/likes/actionCreators";
import { setCounterAC } from "../../store/likes/actionCreators";
import CommentsForm from "../commentsForm/commentsForm";

const PostsPage = () => {
  const dispatch = useDispatch()



  const users = useSelector(store => store.users.value)
  const productsArr = useSelector(store => store.counter.counter)
  const userIndex = useSelector(store => store.userIndex.value)
  const user = users[userIndex]


  const posts = useSelector(store => store.posts.value)

  const products = productsArr[1].posts

  return (
    <>
      <div className={styles.post_page_container} >
        <div className={styles.post_img_container}>
          {posts.map(({ url, userIndex, userUrl, name }, index) => <div className={styles.posts_container}><div className={styles.user_container}>< img className={styles.user_img} src={userUrl} /><h3 className={styles.user_name}>{name}</h3></div><img className={styles.posts_img} src={url} />{products[index].comments.map(el => <h3>{el}</h3>)}<span className={styles.posts_span}>Likes:{products[index].likes}</span><svg onClick={() => {
            dispatch(incrementLikesAC({ index: index, userIndex: userIndex }))
            dispatch(setCounterAC())
          }} className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M513.706667 955.733333c-5.0688 0-9.898667-2.269867-13.141334-6.161066L136.192 510.088533a16.554667 16.554667 0 0 1-1.860267-2.747733C90.299733 457.8816 68.266667 399.377067 68.266667 332.8c0-72.055467 26.368-134.9632 78.370133-186.999467C198.0928 94.344533 260.727467 68.266667 332.8 68.266667c69.6832 0 130.2016 23.278933 180.053333 69.2224C562.653867 91.5456 622.574933 68.266667 691.2 68.266667c73.250133 0 136.174933 26.112 187.067733 77.602133C929.672533 197.888 955.733333 260.778667 955.733333 332.8c0 67.157333-22.1184 126.088533-65.757866 175.172267L526.882133 949.504c-3.2256 3.925333-8.055467 6.212267-13.141333 6.229333H513.706667zM164.130133 490.308267l349.525334 421.563733 350.395733-426.069333C902.912 442.043733 921.6 392.174933 921.6 332.8c0-63.607467-22.1184-116.906667-67.601067-162.935467C809.130667 124.4672 755.882667 102.4 691.2 102.4c-63.658667 0-116.599467 21.742933-161.809067 66.491733a17.066667 17.066667 0 0 1-29.696 2.986667 17.9712 17.9712 0 0 1-2.321066-1.9456C451.925333 124.484267 398.097067 102.4 332.8 102.4c-63.573333 0-116.5824 22.084267-162.013867 67.5328C124.7744 215.978667 102.4 269.243733 102.4 332.8c0 59.323733 18.944 109.175467 57.9072 152.4224 0.5632 0.546133 2.338133 2.304 3.822933 5.085867z" /></svg> 
          
          <CommentsForm index={index} userIndex={userIndex} /></div>)

          }</div>

        <Navigation />
      </div>
    </>
  )
}
export default PostsPage


